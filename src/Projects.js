import React, { Component } from 'react';
import './Projects.css';
import SectionHeader from './SectionHeader';
import Scroll from 'react-scroll';
const Element = Scroll.Element;

const Project = (props) => {
  const { name, description, imageURL, github, demo, presentation, orientation, altText } = props.info;
  return (
    <div className="project-card">
      <div>
        <img className={orientation} src={imageURL} alt={altText} />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="link-container">
        {demo ?
          <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
          : null}
        <a href={github} target="_blank" rel="noopener noreferrer">Code</a>
        {presentation ?
          <a href={presentation} target="_blank" rel="noopener noreferrer">Presentation</a>
          : null
        }
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
          name: "Grace's Bakery",
          description: 'A fictional e-commerce site for delivering freshly baked goods. Built with React, Redux, Express, Sequelize and PostgreSQL.',
          imageURL: './images/shootingStar.gif',
          altText: "Grace's Bakery screenshot",
          orientation: 'landscape',
          github: 'https://github.com/stella-yc/graces-bakery',
          demo: 'https://gracesbakery.herokuapp.com/',
          presentation: null
        },
        {
          name: 'Forest Adventure',
          description: 'A classic 2D platformer built with Phaser.js, ES6 and webpack. Shoot stars, plant & climb trees, and collect all 5 gems! Created as part of an independent Stackathon project at Fullstack Academy.',
          imageURL: './images/shootingStar.gif',
          altText: 'Gameplay featuring the ability to shoot stars.',
          orientation: 'landscape',
          github: 'https://github.com/stella-yc/forest-adventure',
          demo: null,
          presentation: 'https://www.youtube.com/watch?v=XOOIo-aKyUA'
        },
        {
          name: 'Tama-Do',
          description: "A gamified productivity app with virtual pets placed at locations of the user's choosing in the real world. Built by a team of four developers, using React Native and Firebase. Winner of Fullstack Academy's Developer's Choice Award.",
          imageURL: './images/monsterMap.png',
          altText: 'A virtual pet monster in Tama-do.',
          orientation: 'landscape',
          github: 'https://github.com/Tama-Do/tama-do',
          demo: null,
          presentation: 'https://www.youtube.com/watch?v=fH4YrnoB3-M&list=PLx0iOsdUOUmnCoQp2wnimmDBx22j2vXBU&index=3'
        },
        {
          name: 'Weather App',
          description: "A web app that displays local weather information and different pictures of dogs depending on the forecast. Built using jQuery as part of a freeCodeCamp project.",
          imageURL: './images/doggyWeather.png',
          altText: 'A doggy weather app',
          orientation: 'landscape',
          github: 'https://github.com/stella-yc/weather-app',
          demo: 'https://stella-yc.github.io/weather-app/',
          presentation: null
        },
        {
          name: "Conway's Game of Life",
          description: "A web app that allows users to set up the initial state of the game by clicking on tiles, or generate a random start state. Built using pure JavaScript.",
          imageURL: './images/gameOfLife.gif',
          altText: 'Game of Life in action',
          orientation: 'landscape',
          github: 'https://github.com/stella-yc/conways-game-of-life',
          demo: 'https://stella-yc.github.io/conways-game-of-life/'
        }
      ]
    }
  }
  render() {
    const projectInfo = this.state.projectInfo;
    return (
      <Element name="projects-element">
        <section className="project-section">
          <SectionHeader
            title="Portfolio"
            underlineColor="pink-underline"
          />
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
