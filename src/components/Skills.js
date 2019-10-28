import React, { Component } from 'react';
import Scroll from 'react-scroll';

import './Skills.css';
import SectionHeader from './SectionHeader';

const Element = Scroll.Element;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:this.props.language,
     
    }
  }
  componentWillReceiveProps({language}) {
    this.setState({...this.state,language})
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }
 

  render() {
    const skills = [
      'Javascript',
      'Node.js',
      'React',
      'HTML & CSS',
      'Python',
      'Bootstrap',
      'Git',
      'Java',
      'Android',
      'MySql',
      'MongoDb',
      'Java',
      'Redux',
    ];
    const{skillsTitle}=this.state.language
    return (
      <Element name="skills-element">
        <section className="skills-section">
          <SectionHeader
            title={skillsTitle}
            color="white"
          />
          <p>{skillsTitle}</p>
          <ul className="skills">
            {skills.map(skill =>
              
              <li  key={skill}>{skill}
               </li>)}
          </ul>
        </section>
      </Element>
    );
  }
}

export default Skills;
