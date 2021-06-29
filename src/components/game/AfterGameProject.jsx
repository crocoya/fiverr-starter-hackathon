import React from 'react';
import './AfterGameProject.css';

function AfterGameProject({
  id,
  title,
  theme,
  description,
  tarif,
  delai,
  click,
}) {
  return (
    <div
      className="projectContainer"
      onClick={() => {
        console.log('oeoeoeoeo');
        if (id === 1) {
          click();
        }
      }}
    >
      <h3>{title}</h3>
      <p>{theme}</p>
      <p>{description}</p>
      <div>
        <p>{tarif}</p>
        <p>{delai}</p>
      </div>
    </div>
  );
}

export default AfterGameProject;
