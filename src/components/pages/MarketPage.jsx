import React from 'react';
import CardItem from '../commons/CardItem';
import { Link } from 'react-router-dom';
import Presentation from '../commons/Presentation';
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
      <Presentation />
      <main>
        <div className='container-search'>
          <div className='content-search'>
            <h2 className='result'>Results for "website"</h2>
            <Link to='/game'>
              <button className='btn-chance'>Get Chance to Get Project</button>
            </Link>
          </div>
          <div className='filter'>
            <div className='filter-cat'>
              <p>
                Category<i className='bx bx-down-arrow-alt'></i>
              </p>
              <p>
                Seller Details<i className='bx bx-down-arrow-alt'></i>
              </p>
              <p>
                Budget<i className='bx bx-down-arrow-alt'></i>
              </p>
              <p>
                Delivery Time<i className='bx bx-down-arrow-alt'></i>
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
