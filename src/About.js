import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './About.css';
import SectionHeader from './SectionHeader';
const Element = Scroll.Element;

class About extends Component {
  
  render() {
  const{aboutTitle,aboutInfo}=this.props.language
    return (
      <Element name="about-element">
        <section className="about-section">
          <SectionHeader
            title={aboutTitle}
          />
          <img src="./images/sergio.jpg" className="round-border profile-pic" alt=""Sergio Diaz Leguizamon/>
          <div className="about-summary">
            <p>{aboutInfo}</p>
        </div>
        </section>
      </Element>
    );
  }
}

export default About;
