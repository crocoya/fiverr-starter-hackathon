import React from 'react';
import './Client.css'
import Search from './Search'

function Client() {
  return (
    <div className="layout-service .discover-fiverr">
      <div className="intro">
        <p>Bienvenue sur Fiverr ! Souhaitez-vous découvrir Fiverr en français ?</p>
        <span className="discover-link">C'est parti !</span>
      </div>
      <header>
        <div className='logo'>
          <i className='bx bxs-drink' />
          <a href='/'>
            fiverr<span className='dot'>.</span>
          </a>
        </div>
        <div className="search">
        <Search />
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
