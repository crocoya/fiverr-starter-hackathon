import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import './style/DashboardPro.css';

export default function DashboardPro() {
  const [notification, setNotification] = React.useState(false);

  return (
    <>
      {notification ? <ReactNotification /> : null}
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

            <div className='container-filter'>
              <ul className='content-filter'>
                <li>ACTIVE</li>
                <li>PENDING APPROVAL</li>
                <li>REQUIRES MODIFICATION</li>
                <li>DRAFT</li>
                <li>DENIED</li>
                <li>PAUSED</li>
                <li>
                  <i class='bx bx-notification'></i>
                </li>
              </ul>
              <button className='btn-create-gig'>CREATE A NEW GIG</button>
            </div>

            <div className='container-active'>
              <div className='content-subtitle'>
                <h4>ACTIVE GIGS</h4>
                <button className='btn-active'>LAST 30 DAYS</button>
              </div>

              <div className='content-gig-filter'></div>

              <div className='content-show-gig'>
                <img
                  src='https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/213507086/original/653e0f50dd8589b8b2a10cf053d279f026a707c6/etre-ami-sur-minecraft.jpeg'
                  alt=''
                />
                <span>i will create mobile application</span>
              </div>

              <span className='span-status'>
                What does your Gig® status mean?
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
