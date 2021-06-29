import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AfterGameProject from '../game/AfterGameProject';
import axios from 'axios';

import './style/AfterGame.css';
function AfterGame() {
  const location = useLocation();
  const history = useHistory();
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [messageToDisplay, setMessageToDisplay] = useState(null);
  const [projectChoosed, setProjectChoosed] = useState(false);
  const projects = [
    {
      id: 1,
      title: 'Design and build a custom wix website',
      theme: 'Web design',
      description:
        'I need an e-commerce site that is properly referenced to rank well on Google and also that the mobile interface is optimal so that the website looks just as amazing on all devices.',
      tarif: '17,63€',
      delai: '2 jours',
    },
    {
      id: 2,
      title: 'Modern UI UX design for your website',
      theme: '',
      description: '',
      tarif: '',
      delai: ' jours',
    },
    {
      id: 3,
      title: 'Wordpress website design, responsive wordpress website',
      theme: 'Design & responsive',
      description:
        'Creating a new modern looking wordpress website or customising and reorganising the existing wordpress.',
      tarif: '44,07',
      delai: '3 jours',
    },
    {
      id: 4,
      title: 'Design modern web and mobile banner ads',
      theme: '',
      description: '',
      tarif: '',
      delai: ' jours',
    },
    {
      id: 5,
      title: 'A desktop interface',
      theme: '',
      description: '',
      tarif: '',
      delai: ' jours',
    },
  ];

  useEffect(() => {
    const score = location.state.score;
    if (score > 10 && score < 13) {
      setProjectsToShow(projects);
      setMessageToDisplay(
        `You got ${score} points. Therefore, you can choose between those 5 projects !`
      );
    } else if (score >= 8 && score <= 10) {
      setProjectsToShow(projects.splice(0, 4));
      setMessageToDisplay(
        `You got ${score} points. Therefore, you can choose between those 4 projects !`
      );
    } else if (score >= 5 && score < 8) {
      setProjectsToShow(projects.splice(0, 3));
      setMessageToDisplay(
        `You got ${score} points. Therefore, you can choose between those 3 projects !`
      );
    } else if (score >= 2 && score < 5) {
      setProjectsToShow(projects.splice(0, 2));
      setMessageToDisplay(
        `You got ${score} points. Therefore, you only can choose between those 2 projects !`
      );
    } else {
      setProjectsToShow(projects.splice(0, 1));
      setMessageToDisplay(
        `You got ${score} points. This is the last project left. But be sure you will do better next time ! (We'll provide you a chance bonus if you accept this project !)  `
      );
    }
  }, []);

  useEffect(() => {
    if (projectChoosed) {
      axios.get('http://localhost:4001/projectValidatedFromFreelance');
      setTimeout(() => {
        history.push('/dashboard-freelances');
      }, 4000);
    }
  }, [projectChoosed]);

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
        <div className="container-aftergame">
          {!projectChoosed ? <p>{messageToDisplay}</p> : null}
          <div className="projectsContainer">
            {!projectChoosed ? (
              projectsToShow.map((project) => (
                <AfterGameProject
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  theme={project.theme}
                  // description={project.description}
                  tarif={project.tarif}
                  delai={project.delai}
                  click={() => setProjectChoosed(true)}
                />
              ))
            ) : (
              <p>
                Thanks to have choosen this project ! You will be in touch with
                the client soon !
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default AfterGame;
