import React from 'react';
import CardItem from '../commons/CardItem';
import './style/MarketPage.css';

export default function MarketPage() {
  return (
    <>
      <header>
        <div className='logo'>
          {/* <i className='bx bxs-drink' /> */}
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
        <div className='container-search'>
          <div className='content-search'>
            <h2 className='result'>Results for "website"</h2>
            <button className='btn-chance'>Get Chance to Get Project</button>
          </div>
          <div className='filter'>
            <div className='filter-cat'>
              <p>
                Category<i class='bx bx-down-arrow-alt'></i>
              </p>
              <p>
                Seller Details<i class='bx bx-down-arrow-alt'></i>
              </p>
              <p>
                Budget<i class='bx bx-down-arrow-alt'></i>
              </p>
              <p>
                Delivery Time<i class='bx bx-down-arrow-alt'></i>
              </p>
            </div>
            <div className='filter-btn'>
              <p>Pro Services</p>
              <p>Local Sellers</p>
              <p>Online Sellers</p>
            </div>
          </div>
        </div>
        <CardItem />
      </main>
    </>
  );
}
