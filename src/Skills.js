import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './Skills.css';
import SectionHeader from './SectionHeader';
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
        <section className="skills-section">
          <SectionHeader
            title="Skills"
          />
          <p>I specialize in full stack JavaScript, and have experience working with front-end frameworks, state management, SQL and noSQL databases, RESTful APIs, and agile development.</p>
          <ul className="skills">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      </Element>
    );
  }
}

export default Skills;
