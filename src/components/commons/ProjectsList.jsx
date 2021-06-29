import React from 'react'


function ProjectsList({title, thème, description, tarif, delai, score}){
  return (
    <div className="ProjectsList">
      <p>Well done! You got the best score! Now you can choose the project you want:</p>
      <h2>{title}</h2>
      <h3>{thème}</h3>
      <p>{description}</p>
      <p>{tarif}</p>
      <p>{delai}</p>
      <p>{score}</p>

      <button>Accepter</button>
      <button>Refuser</button>
    </div>
  )
}

export default ProjectsList;
