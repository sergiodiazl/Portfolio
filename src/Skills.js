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
        'ES6',
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
      ],
      animateSkills: ''
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (evt) {
    let scrollTop = evt.srcElement.scrollingElement.scrollTop;
    if (scrollTop > 300) {
      this.setState({ animateSkills: 'fadeInUp' });
    }
    if (scrollTop < 300) {
      this.setState({animateSkills: ''});
    }
  }

  render() {
    const skills = this.state.skills;
    return (
      <Element name="skills-element">
        <section className="skills-section">
          <SectionHeader
            title="Skills"
            color="white"
          />
          <p>Full stack JavaScript web development</p>
          <ul className="skills">
            {skills.map(skill => <li className={this.state.animateSkills} key={skill}>{skill}</li>)}
          </ul>
        </section>
      </Element>
    );
  }
}

export default Skills;
