import React from 'react';

import erlogo from '../images/1logo.png';
import deuxlogo from '../images/2logo.png';
import troislogo from '../images/3logo.png';
import quatrelogo from '../images/4logo.png';
import cinqlogo from '../images/5logo.png';
import './Client.css';
import Search from './Search';

function Client() {
  return (
    <div className='layout-service .discover-fiverr'>
      <div className='intro'>
        <p>
          Bienvenue sur Fiverr ! Souhaitez-vous découvrir Fiverr en français ?
        </p>
        <span className='discover-link'>C'est parti !</span>
      </div>
      <header>
        <div className='logo'>
          <i className='bx bxs-drink' />
          <a href='/'>
            fiverr<span className='dot'>.</span>
          </a>
        </div>
        <div className='search'>
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
      <body>
        <div className='ulLine2'>
          <li>Graphism & Design</li>
          <li>Marketing digital</li>
          <li>Rédaction & Traduction</li>
          <li>Vidéo & Animation</li>
          <li>Musique & Audio</li>
          <li>Programmation & Tech</li>
          <li>Data</li>
          <li>Business</li>
          <li>Loisir</li>
        </div>
        <hr></hr>
        <div className='title2'>
          <h1>Popular professional services</h1>
        </div>
        <div className='logo2'>
          <img src={erlogo} alt='1erlogo' />
          <img src={deuxlogo} alt='2logo' />
          <img src={troislogo} alt='3logo' />
          <img src={quatrelogo} alt='4logo' />
          <img src={cinqlogo} alt='5logo' />
        </div>
      </body>
    </div>
  );
}

export default Client;
