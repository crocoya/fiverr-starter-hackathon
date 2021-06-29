import React from 'react';
import './style/DashboardPro.css';
export default function DashboardPro() {
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
        <div className='content-dashboard'>
          <div className='content-body'>
            <div className='content-title'>
              <h2 className='body-title'>Gigs</h2>
              <h4 className='body-sub-p'>Accepting Custom Orders</h4>
            </div>
            <ul className='content-filter'>
              <li>ACTIVE</li>
              <li>PENDING APPROVAL</li>
              <li>REQUIRES MODIFICATION</li>
              <li>DRAFT</li>
              <li>DENIED</li>
              <li>PAUSED</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
