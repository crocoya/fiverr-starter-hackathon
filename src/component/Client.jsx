import React from 'react';
import './Client.css'

function Client() {
  return (
    <div className="layout-service .discover-fiverr">
      <div></div>
      <p>Bienvenue sur Fiverr ! Souhaitez-vous découvrir Fiverr en français ?</p>
      <span className="discover-link">C'est parti !</span>
      <header>
        <div className='logo'>
          <i className='bx bxs-drink' />
          <a href='/'>
            fiverr<span className='dot'>.</span>
          </a>
        </div>
        <div className='links'>
          <ul>
            <li>Fiverr Business</li>
            <li>Explore</li>
            <li>Become a Seller</li>
            <li>Get Started</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Client
