import React from 'react';
import { Link } from 'react-router-dom';
import { init } from 'ityped';

import './style/Presentation.css';

export default function Presentation() {
  const textRef = React.useRef();

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
          <span>Slide 1</span>
        </div>
        <div className='slide two'>
          <span>Slide 2</span>
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
