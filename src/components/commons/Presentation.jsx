import React from 'react';
import { Link } from 'react-router-dom';
import './style/Presentation.css';

export default function Presentation() {
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
          <div class='container-s ui action left icon input '>
            <i
              aria-hidden='true'
              class='search icon'
              style={{ fontSize: '16px' }}
            />
            <input type='text' placeholder='Try "developper website"' />
            <Link to='/marketplace-freelances'>
              <button
                class='btn-recherche ui button'
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
  );
}
