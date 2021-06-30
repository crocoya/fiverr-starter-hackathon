/* eslint-disable react-hooks/exhaustive-deps */
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
      img: 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/171770678/original/d8c950e18b81ed00b8dea152dba7fcc5f8f062be.jpg',
      title: 'Design and build a custom wix website',
      theme: 'Web Design',
      description:
        'I need an e-commerce site that is properly referenced to rank well on Google and also that the mobile interface is optimal so that the website looks just as amazing on all devices.',
      tarif: '17,63 €',
      delai: '2 jours',
      score: 12,
    },
    {
      id: 2,
      img: 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/3737290/original/a29919f68690402846df3c0c8a9848b8550d55ea.png',
      title: 'Email banner, header, footer and email signature',
      theme: 'Design',
      description:
        'I am looking for a designer to create a banner, a footer and an email signature for our website.',
      tarif: '8,80 €',
      delai: '1 jour',
    },
    {
      id: 3,
      title: 'Wordpress website design, responsive wordpress website',
      img: 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/157750073/original/006c1cd999f95a6f6847455a687ad8fb63be1738.jpg',
      theme: 'Design & Responsive',
      description:
        'Creating a new modern looking wordpress website or customising and reorganising the existing wordpress.',
      tarif: '44,50 €',
      delai: '3 jours',
      score: 8,
    },
    {
      id: 4,
      title: 'Create unique custom icons with fancy colors',
      img: 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/166530150/original/9b7d04f2c3f16ed6171a39b7d30a17994021c648.jpg',
      theme: 'Custom Icon',
      description:
        'I am looking for an expert illustrator to create beautiful, detailed illustrations, including vector illustrations of custom icons.',
      tarif: '35,30 €',
      delai: '7 jours',
    },
    {
      id: 5,
      title: 'Design professional email newsletters',
      img: 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/120179950/original/82e1dbbcbb8e94b38bff75ca4fc3dfd83641dd60.jpg',
      theme: 'Email',
      description:
        'Creation of customisable HTML templates for email alerts. MARKETING PLATFORM templates must be 100% customisable in the marketing platform.',
      tarif: '22 €',
      delai: '3 jours',
      score: 4,
    },
  ];

  useEffect(() => {
    const score = location.state.score;
    if (score > 10 && score < 13) {
      setProjectsToShow(projects);
      setMessageToDisplay(
        `🎉 You got ${score} points. Therefore, you can choose between those 5 projects! 🎉`
      );
    } else if (score >= 8 && score <= 10) {
      setProjectsToShow(projects.splice(0, 4));
      setMessageToDisplay(
        `🎉 You got ${score} points. Therefore, you can choose between those 4 projects! 🎉`
      );
    } else if (score >= 5 && score < 8) {
      setProjectsToShow(projects.splice(0, 3));
      setMessageToDisplay(
        `🎉 You got ${score} points. Therefore, you can choose between those 3 projects! 🎉`
      );
    } else if (score >= 2 && score < 5) {
      setProjectsToShow(projects.splice(0, 2));
      setMessageToDisplay(
        `🎉 You got ${score} points. Therefore, you only can choose between those 2 projects! 🎉`
      );
    } else {
      setProjectsToShow(projects.splice(0, 1));
      setMessageToDisplay(
        `🎉 You got ${score} points. This is the last project left. But be sure you will do better next time ! (We'll provide you a chance bonus if you accept this project!) 🎉`
      );
    }
  }, []);

  useEffect(() => {
    if (projectChoosed) {
      setTimeout(() => {
        axios.get('http://localhost:4001/projectValidatedFromFreelance');
        history.push('/dashboard-freelances');
      }, 4000);
    }
  }, [projectChoosed]);

  return (
    <>
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
        <div className='container-aftergame'>
          {!projectChoosed ? (
            <p className='text-score'>{messageToDisplay}</p>
          ) : null}
          <div className='projectsContainer'>
            {!projectChoosed ? (
              projectsToShow.map((project) => (
                <AfterGameProject
                  id={project.id}
                  key={project.id}
                  img={project.img}
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
