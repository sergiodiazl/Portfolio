import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './About.css';
import SectionHeader from './SectionHeader';
const Element = Scroll.Element;

class About extends Component {
  render() {
    return (
      <Element name="about-element">
        <section className="about-section">
          <SectionHeader
            title="About Me"
          />
          <img src="./images/profile.jpg" className="round-border profile-pic" alt="Stella Chung"/>
          <div className="about-summary">
            <p>After working in database and CRM management in the nonprofit sector, I decided to apply my love of technology and analytical thinking towards becoming a software engineer. I'm currently a full stack web developer specializing in JavaScript.</p>
            <p>Besides coding, I love hiking, painting, and traveling. I also care deeply about environmental issues, diversity in tech, and civic engagement.</p>
            <p>Check out my <a href="https://stackoverflow.com/story/stellachung" target="_blank" rel="noopener noreferrer">Developer Story</a> at Stack Overflow to learn more about what I've been up to.</p>
            <p>If you'd like to get in touch, shoot me an
            <a href="mailto:stll.chung@gmail.com" target="_blank" rel="noopener noreferrer"> email.</a> You can also find me writing at <a href="https://medium.com/@stll.chung" target="_blank" rel="noopener noreferrer"> Medium</a>.
          </p>
            <p>Thanks for visiting!</p>
        </div>
        </section>
      </Element>
    );
  }
}

export default About;
