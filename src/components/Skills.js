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
      {name:'Javascript',icon:'fab fa-js-square'},
      {name:'Node.js',icon:'fab fa-node-js'},
      {name:'React',icon:'fab fa-react'},
      {name:'Redux',icon:''},
      {name:'HTML ',icon:'fab fa-html5'},
      {name:'CSS',icon:'fab fa-css3-alt'},
      {name:'Python',icon:'fab fa-python'},
      {name:'Bootstrap',icon:'fab fa-bootstrap'},
      {name:'Git',icon:'fab fa-git-alt'},
      {name:'Java',icon:'fab fa-java'},
      {name:'MySql',icon:''},
      {name:'MongoDb',icon:''},
   
     
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
            {skills.map(({name,icon}) =>
              
              <li  key={name}>
               <i className={ icon} aria-hidden="true"></i> 
              {name}
               </li>)}
          </ul>
        </section>
      </Element>
    );
  }
}

export default Skills;
