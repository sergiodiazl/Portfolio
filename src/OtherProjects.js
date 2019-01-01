import React, { Component } from 'react';
import './OtherProjects.css';
import SectionHeader from './SectionHeader';
import Scroll from 'react-scroll';
const Element = Scroll.Element;

const OtherProject = (props) => {
  const { name, description, imageURL, altText, link } = props.info;
  return (
    <a href={link} >
    <div className="other-card">
        
          <img src={imageURL} alt={altText} />
        

      <div className="other-project-text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

    </div>
    </a>
  );
}
class OtherProjects extends Component {
 
  render() {

    const{ projectArticleInfo,navProjects }= this.props.language
    return (
      <Element name="other-element">
        <section className="other-section">
          <SectionHeader
            title={navProjects }
            underlineColor="pink-underline"
          />
          <div className="other-container">
            {projectArticleInfo.map(project =>
              <OtherProject info={project} key={project.name} />)}
          </div>
        </section>
      </Element>
    );
  }
}

export default OtherProjects;
