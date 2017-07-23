import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './Skills.css';
const Element = Scroll.Element;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        'JavaScript',
        'Node.js',
        'React',
        'Redux',
        'HTML & CSS',
        'Phaser.js',
        'React Native',
        'Git & GitHub',
        'Sequelize',
        'Express',
        'PostgreSQL',
        'Firebase',
      ]
    }
  }

  render() {
    const skills = this.state.skills;
    return (
      <Element name="skills-element">
        <section id="skills-section">
          <h1 id="skills" className="section-header">Skills</h1>
          <ul className="skills center-me">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      </Element>
    );
  }
}

export default Skills;
