import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [
        {
          name: 'GitHub',
          image: "./images/github.png",
          fa: 'fa-github',
          link: "https://github.com/sergiodiazl/"
        },
      
    
        {
          name: 'LinkedIn',
          image: "./images/linkedin.png",
          fa: 'fa-linkedin',
          link: "https://www.linkedin.com/in/sergiodiazleguizamon/"
        },
      ]
    }
  }

  render() {
    const socialLinks = this.state.socialLinks;
    return (
      <div className="social-links">
        {socialLinks.map(social =>
          <div className="social-link" key={social.name}>
            <a href={social.link}
              className={this.props.iconColor}
              target="_blank" rel="noopener noreferrer">
              {/*<img src={social.image} alt={social.name}/> */}
              <i className={`fa ${social.fa}`}aria-hidden="true"></i>
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Social;



