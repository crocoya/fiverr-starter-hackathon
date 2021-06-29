import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import './style/GamePage.css';

export default function GamePage() {
  anime({
    targets: 'span',
    translateX: 800,
    duration: 1000,
    delay: 2000,
    direction: 'alternate',
  });

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
        <div className='content'>
          <div className='content-body'>
            <div className='container'>
              <div className='page-title'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <span className='.breadcrumb-title'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, veniam.
                    </span>
                  </li>
                </ol>
              </div>
              <div className='global-activity'>
                <div className='container-game'>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                  <span>HELLO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}