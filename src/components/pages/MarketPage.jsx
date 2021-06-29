import React, { useState } from 'react';
import CardItem from '../commons/CardItem';
import { Link } from 'react-router-dom';
import './style/MarketPage.css';

export default function MarketPage() {
  const [bannerDisplayed, setBannerDisplayed] = useState(false);

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
            <button
              className='btn-chance'
              onClick={() => setBannerDisplayed(true)}
            >
              Give a chance to a newcomer !
            </button>
          </div>
          <div
            className={`newcommerBanner ${bannerDisplayed ? 'showBanner' : ''}`}
          >
            <p>
              Starting as a new freelance is never an easy thing, especially on
              well known website like fiverr. By using this feature, you will
              give your project to a newcomer, and help him to build a
              reputation ! To thanks you doing this effort, we offer you a 30$
              discount on the project.
            </p>
            <div className='bannerButtonContainer'>
              <Link className='try' to='/clientProject'>
                I try it !
              </Link>

              <Link className='later' onClick={() => setBannerDisplayed(false)}>
                Maybe later
              </Link>
            </div>
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
