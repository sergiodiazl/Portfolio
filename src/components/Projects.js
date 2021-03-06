import React, { Component } from 'react';
import './Projects.css';
import SectionHeader from './SectionHeader';

import Scroll from 'react-scroll';



const Element = Scroll.Element;
const Project = (props) => {
  const { name, description, imageURL, github, demo,  orientation, altText } = props.info;


  return (
    <div className={`project-card `}>
      <div>
        <div className="project-img-container">
          
          <img className={orientation} src={imageURL} alt={altText} />
          
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="link-container">
        {
          demo
            ? <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
            : null
          }
        <a href={github} target="_blank" rel="noopener noreferrer">Code</a>
     
      </div>

    </div>
  );
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:this.props.language,
    };
 
  }

  componentDidMount () {
    window.addEventListener('scroll', this.animateScroll);
  }
  componentWillReceiveProps({language}) {
    this.setState({...this.state,language})
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.animateScroll);
  }

 
  render() {
    const {projectInfo}=this.state.language;
    return (
      <Element name="projects-element">
        <section className="project-section">
          <SectionHeader
            title="Portfolio"
            underlineColor="green-underline"
          />
          <div className="projects-container">
            {projectInfo.map(project =>
              <Project
                info={project}
                key={project.id}
              />)
            }
          </div>
        </section>
      </Element>
    );
  }
}

export default Projects;
