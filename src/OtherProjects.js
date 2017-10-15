import React, { Component } from 'react';
import './OtherProjects.css';
import SectionHeader from './SectionHeader';
import Scroll from 'react-scroll';
const Element = Scroll.Element;

const OtherProject = (props) => {
  const { name, description, imageURL, altText, link } = props.info;
  return (
    <div className="other-card">
        <a href={link} >
          <img src={imageURL} alt={altText} />
        </a>

      <div className="other-project-text">
        <a href={link}><h3>{name}</h3></a>
        <p>{description}</p>
      </div>

    </div>
  );
}
class OtherProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectInfo: [
        {
          name: 'Here’s what I learned from 700+ hours in a coding bootcamp',
          description: "Article published on Hacker Noon.",
          imageURL: './images/bootcampArticle.png',
          altText: 'Image from Hacker Noon article',
          link: 'https://hackernoon.com/heres-what-i-learned-from-700-hours-in-a-coding-bootcamp-d92cb4e8afc1'
        },
        {
          name: "How to implement Dijkstra's algorithm in JavaScript",
          description: "A walkthrough of how to code Dijkstra's algorithm using a weighted graph.",
          imageURL: './images/dijkstra.png',
          altText: "A weighted graph",
          link: ''
        },
        {
          name: "Better Web Development with Elm",
          description: "Tech talk presented at Fullstack Academy on the Elm language and functional programming concepts.",
          imageURL: './images/techtalk.png',
          altText: 'Tech talk screencapture',
          link: 'https://www.youtube.com/watch?v=um0jxfgboNo'
        }
      ]
    }
  }
  render() {
    const projectInfo = this.state.projectInfo;
    return (
      <Element name="other-element">
        <section className="other-section">
          <SectionHeader
            title="Other Projects"
            underlineColor="pink-underline"
          />
          <div className="other-container">
            {projectInfo.map(project =>
              <OtherProject info={project} key={project.name} />)}
          </div>
        </section>
      </Element>
    );
  }
}

export default OtherProjects;
