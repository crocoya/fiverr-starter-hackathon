import React from 'react';
import './AfterGameProject.css';

function AfterGameProject({
  id,
  img,
  title,
  theme,
  description,
  tarif,
  delai,
  click,
}) {
  return (
    <div
      className='projectContainer'
      onClick={() => {
        if (id === 1) {
          click();
        }
      }}
    >
      {/* <h3>{title}</h3>
      <p>{theme}</p>
      <p>{description}</p>
      <div>
        <p>{tarif}</p>
        <p>{delai}</p>
      </div> */}
      <div className='nav-item cardito'>
        <img src={img} alt='' />
        <div className='nav-content'>
          <h3>{title}</h3>
          <p>{theme}</p>
          <p>{description}</p>
          {/* <div className='content-note'>
            <span>
              <i className='bx bxs-star' />
              &nbsp;5.0
            </span>
            &nbsp; (617)
          </div> */}
          <div className='content-price'>
            <p>{tarif}</p>
            <br />
            <p>{delai}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterGameProject;
