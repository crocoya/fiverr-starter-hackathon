import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import './style/ClientProject.css';
const ENDPOINT = 'http://127.0.0.1:4001';

export default function ClientProject() {
  const [freelanceFound, setFreelanceFound] = useState(false);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('projectValidatedFromFreelance', (data) => {
      console.log('freelance', data);
      setFreelanceFound(true);
    });

    socket.on('ouais', (data) => {
      console.log('ouais', data);
    });

    lookForFreelance();
  }, []);

  const lookForFreelance = () => {
    axios.get('http://localhost:4001/lookForFreelance');
  };

  return (
    <>
      <header>
        <div className="logo">
          {/* <i className='bx bxs-drink' /> */}
          <a href="/">
            fiverr<span className="dot">.</span>
          </a>
        </div>
        <div className="links">
          <ul>
            <li>Fiverr Pro</li>
            <li>Explore</li>
            <li>Become a Seller</li>
            <li>Get Started</li>
          </ul>
        </div>
      </header>
      {!freelanceFound ? (
        <div className="clientLoader">
          <p className="clientLoaderText">
            Thanks a lot to allow to a new freelance to prove his worth ! You
            will be notified as soon as a newcommer is selected for your project
          </p>
          <div className="wrap">
            <div className="loading">
              <div className="bounceball"></div>
              <div className="text">
                LOOKING FOR A FREELANCE FOR YOUR PROJECT
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>We found a freelance for you !</div>
        </div>
      )}
    </>
  );
}
