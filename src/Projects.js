import React, { Component } from 'react';
import './Projects.css';
import Scroll from 'react-scroll';
const Element = Scroll.Element;

const Project = (props) => {
  const { name, description, imageURL, github, demo, presentation, orientation, altText } = props.info;
  return (
    <div className="project-card">
      <img className={orientation} src={imageURL} alt={altText} />
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="link-container">
        <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={github} target="_blank" rel="noopener noreferrer">Code</a>
        <a href={presentation} target="_blank" rel="noopener noreferrer">Presentation</a>
      </div>
    </div>
  );
}
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectInfo: [
        {
          name: 'Forest Adventure',
          description: 'A classic 2D platformer built with Phaser.js. Built as part of independent Stackathon project at Fullstack Academy.',
          imageURL: './images/shootingStar.gif',
          altText: 'Gameplay featuring the ability to shoot stars.',
          orientation: 'landscape',
          github: 'https://github.com/stella-yc/forest-adventure',
          demo: '#',
          presentation: 'https://www.youtube.com/watch?v=XOOIo-aKyUA'
        },
        {
          name: 'Tama-Do',
          description: "A gamified productivity app with virtual pets placed at locations of the user's choosing in the real world. Built by a team of four developers, using React Native and Firebase. Winner of Fullstack Academy's Developer's Choice Award.",
          imageURL: './images/signup.gif',
          altText: 'A virtual pet monster in Tama-do.',
          orientation: 'portrait',
          github: 'https://github.com/Tama-Do/tama-do',
          demo: '#',
          presentation: 'https://www.youtube.com/watch?v=fH4YrnoB3-M&list=PLx0iOsdUOUmnCoQp2wnimmDBx22j2vXBU&index=3'
        }
      ]
    }
  }
  render() {
    const projectInfo = this.state.projectInfo;
    return (
      <Element name="projects-element">
        <section id="project-section">
          <h1 id="projects" className="section-header">
            Projects
          </h1>
          <div className="projects-container">
            {projectInfo.map(project =>
              <Project info={project} key={project.name} />)}
          </div>
        </section>
      </Element>
    );
  }
}

export default Projects;
