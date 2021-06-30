import React from 'react';
import { Link } from 'react-router-dom';
import { init } from 'ityped';

import './style/Presentation.css';

export default function Presentation() {
  const textRef = React.useRef();
  const oneRef = React.useRef();

  React.useEffect(() => {
    init(oneRef.current, {
      showCursor: false,
      startDelay: 500,
      typeSpeed: 40,
      loop: false,
      strings: [
        'Offrons la possibilité aux nouveaux talents de prouver leur potentiel !',
      ],
    });
  }, []);

  React.useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ['Freelance'],
    });
  }, []);
  return (
    <div className='container-slide'>
      <div className='container-horizontal'>
        <div className='slide one'>
          <p className='title-team'>FIVERR STARTER</p>
          <p ref={oneRef} className='oneRef'></p>
        </div>

        <div className='slide two'>
          <p className='text-one'>
            Le client obtient une réduction pour son prochain contrat
          </p>
          <p className='text-one'>
            Le freelance peut décrocher un projet malgré le manque de visibilité
          </p>
        </div>

        <div className='slide three'>
          <div className='container-banner'>
            <span className='title-banner'>
              Find the perfect <i ref={textRef}></i>
            </span>{' '}
            <span className='subtitle-banner'>services for your business</span>
            <div className='container-s ui action left icon input '>
              <i
                aria-hidden='true'
                className='search icon'
                style={{ fontSize: '16px' }}
              />
              <input type='text' placeholder='Try "developper website"' />
              <Link to='/marketplace-freelances'>
                <button
                  className='btn-recherche ui button'
                  style={{
                    backgroundColor: '#1dbf73',
                    color: 'white',
                    fontSize: '16px',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
