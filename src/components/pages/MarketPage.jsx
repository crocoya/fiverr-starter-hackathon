import React from 'react';
import CardItem from '../commons/CardItem';
import './style/MarketPage.css';

export default function MarketPage() {
  return (
    <>
      <header>
        <div className='logo'>
          <i className='bx bxs-drink' />
          <a href='/'>
            fiverr<span className='dot'>.</span>
          </a>
        </div>
        <div className='links'>
          <ul>
            <li>Fiverr Pro</li>
            <li>Explore</li>
            <li>Become a Seller</li>
            <li>Get Started</li>
          </ul>
        </div>
      </header>
      <main>
        <CardItem />
      </main>
    </>
  );
}
