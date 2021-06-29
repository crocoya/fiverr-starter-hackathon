import React from 'react';
import ProjectsList from '../components/commons/ProjectsList';

function AfterGame() {
  const projects = [
    {
      id: 1,
      title: 'Design and build a custom wix website',
      thème: 'Web design',
      description:
        'I need an e-commerce site that is properly referenced to rank well on Google and also that the mobile interface is optimal so that the website looks just as amazing on all devices.',
      tarif: '17,63€',
      delai: '2 jours',
      score: 12,
    },
    {
      id: 2,
      title: 'Email banner, header, footer and email signature',
      thème: 'Design',
      description:
        'I am looking for a designer to create a banner, a footer and an email signature for our website.',
      tarif: '8,8',
      delai: '1 jour',
    },
    {
      id: 3,
      title: 'Wordpress website design, responsive wordpress website',
      thème: 'Design & responsive',
      description:
        'Creating a new modern looking wordpress website or customising and reorganising the existing wordpress.',
      tarif: '44,07',
      delai: '3 jours',
      score: 8,
    },
    {
      id: 4,
      title: 'Create unique custom icons',
      thème: 'Custom icon',
      description:
        'I am looking for an expert illustrator to create beautiful, detailed illustrations, including vector illustrations of custom icons.',
      tarif: '35',
      delai: '7 jours',
    },
    {
      id: 5,
      title: 'Design professional email newsletters',
      thème: 'Email',
      description:
        'Creation of customisable HTML templates for email alerts. MARKETING PLATFORM templates must be 100% customisable in the marketing platform.',
      tarif: '22',
      delai: '3 jours',
      score: 4,
    },
  ];

  /*const score = [
    {
      nom: "Daniel",
      score: 12,
    },
        {
      nom: "Maxime",
      score: 8,
    },
            {
      nom: "Bertrand",
      score: 4,
    },
  ]*/

  return (
    <div>
      {projects
        .map((project) => (
          <ProjectsList
            key={project.id}
            title={project.title}
            thème={project.thème}
            description={project.description}
            tarif={project.tarif}
            delai={project.delai}
            score={project.score}
          />
        ))
        .filter((project) => {
          if (project.score === 12) {
            return projects;
          } else {
            
          }
        })}
    </div>
  );
}

export default AfterGame;
