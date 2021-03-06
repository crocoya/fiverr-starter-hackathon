import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style/DashboardPro.css';
const ENDPOINT = 'http://127.0.0.1:4001';

export default function DashboardPro() {
  const history = useHistory();
  const [notif, setNotif] = useState(false);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('lookForFreelance', (data) => {
      toast.info('New beginners projects available !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setNotif(true);
    });

    socket.on('projectValidatedFromClient', (data) => {
      toast.success('Beginner project has been accepted by the client !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setNotif(true);
      setTimeout(() => {
        history.push('/thanks');
      }, 2000);
    });

    socket.on('projectRefusedFromClient', (data) => {
      toast.error(
        'Beginner project has been refused by the client ... Try another one !',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setNotif(true);
    });
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          {/* <i className='bx bxs-drink' /> */}
          <a href="/">
            fiverr<span className="dot">.</span>
          </a>
        </div>
        <div className="links">
          <ul>
            <li>Fiverr Pro</li>
            <li>Explore</li>
            <li>Become a Seller</li>
            <li>Get Started</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="content-dashboard">
          <div className="content-body">
            <div className="content-title">
              <h2 className="body-title">Gigs</h2>
              <h4 className="body-sub-p">Accepting Custom Orders</h4>
            </div>

            <div className="container-filter">
              <ul className="content-filter">
                <li>ACTIVE</li>
                <li>PENDING APPROVAL</li>
                <li>REQUIRES MODIFICATION</li>
                <li>DRAFT</li>
                <li>DENIED</li>
                <li>PAUSED</li>
                <Link to="/game">
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#1dbf73',
                    }}
                  >
                    BEGINNER PROJECTS
                    <i
                      className="bx bx-notification"
                      style={{
                        fontSize: '2rem',
                        color: '#1dbf73',
                        marginLeft: '0.5rem',
                      }}
                    />
                  </li>
                </Link>
              </ul>
              <button className="btn-create-gig">CREATE A NEW GIG</button>
            </div>

            <div className="container-active">
              <div className="content-subtitle">
                <h4>ACTIVE GIGS</h4>
                <button className="btn-active">LAST 30 DAYS</button>
              </div>

              <div className="content-gig-filter"></div>

              <div className="content-show-gig">
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/213507086/original/653e0f50dd8589b8b2a10cf053d279f026a707c6/etre-ami-sur-minecraft.jpeg"
                  alt=""
                />
                <span>i will create mobile application</span>
              </div>

              <span className="span-status">
                What does your Gig?? status mean?
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
