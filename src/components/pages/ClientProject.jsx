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
      setFreelanceFound(true);
    });

    lookForFreelance();
  }, []);

  const lookForFreelance = () => {
    axios.get('http://localhost:4001/lookForFreelance');
  };

  const acceptFreelance = () => {
    axios.get('http://localhost:4001/projectValidatedFromClient');
  };

  const refuseFreelance = () => {
    axios.get('http://localhost:4001/projectRefusedFromClient');
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
        <div className="freelanceFound">
          <div className="content-btn">
            <p>We found a freelance for you !</p>
            <div className="buttonContainer">
              <button className="green" onClick={acceptFreelance}>
                Give a chance to this freelance !
              </button>
              <button
                className="red"
                onClick={() => {
                  setFreelanceFound(false);
                  refuseFreelance();
                }}
              >
                I'd like to try with someone else
              </button>
            </div>
          </div>

          <div className="content-card">
            <div className="nav-item">
              <img
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/171770678/original/d8c950e18b81ed00b8dea152dba7fcc5f8f062be.jpg"
                alt=""
              />
              <div className="nav-content">
                <p>
                  I will build modern wordpress website and ecommerce online
                  store
                </p>
                <div className="content-note">
                  <span>
                    <i className="bx bxs-star" />
                    &nbsp;5.0
                  </span>
                  &nbsp; (617)
                </div>
                <div className="content-price">
                  <span>
                    <i className="bx bxs-heart" />
                  </span>
                  <span>
                    <em>STARTING AT $170.00</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
