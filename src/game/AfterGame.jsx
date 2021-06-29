import React from 'react'

function AfterGame() {

  const projects = [
    {
      id : 1,
      title : "Design and build a custom wix website",
      thème : "Web design",
      description : "I need an e-commerce site that is properly referenced to rank well on Google and also that the mobile interface is optimal so that the website looks just as amazing on all devices.",
      tarif : "17,63€",
      delai : "2 jours"
    },
    {
      id : 2,
      title : "Modern UI UX design for your website",
      thème : "",
      description : "",
      tarif : "",
      delai : " jours"
    },
    {
      id : 3,
      title : "Wordpress website design, responsive wordpress website",
      thème : "Design & responsive",
      description : "Creating a new modern looking wordpress website or customising and reorganising the existing wordpress.",
      tarif : "44,07",
      delai : "3 jours"
    },
    {
      id : 4,
      title : "Design modern web and mobile banner ads",
      thème : "",
      description : "",
      tarif : "",
      delai : " jours"
    },
    {
      id : 5,
      title : "A desktop interface",
      thème : "",
      description : "",
      tarif : "",
      delai : " jours"
    }
  ]

  function FullProjects(props) {
    const projects = props.projects;
    const listProjects = projects.map((list) =>
      <listProjects key={list.toString()}
        value={list} />
    );
    
  }
  return (
    <div>
{FullProjects}
    </div>
  )
}

export default AfterGame;

