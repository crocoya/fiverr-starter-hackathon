import React from 'react';
import './style/CardItem.css';

export default function CardItem() {
  const url =
    'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/14438799/original/61680072f1fd7a05cc9d6c6996f27368f84b8acc.jpg';
  return (
    <>
      <div className='global-activity card'>
        <div className='nav card-list'>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
              <span></span>
            </div>
          </div>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
            </div>
          </div>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
            </div>
          </div>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
            </div>
          </div>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
            </div>
          </div>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
            </div>
          </div>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
            </div>
          </div>
          <div className='nav-item'>
            <img src={url} alt='' />
            <div className='nav-content'>
              <p>
                I will build modern wordpress website and ecommerce online store
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
