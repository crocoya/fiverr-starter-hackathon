import React from 'react';
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
          <span>Slide 3</span>
        </div>
      </div>
    </div>
  );
}
