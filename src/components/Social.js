import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [
        {
          name: 'GitHub',
          fa: 'fab fa-github',
          link: "https://github.com/sergiodiazl/"
        },
      
    
        {
          name: 'LinkedIn',
          fa: 'fab fa-linkedin',
          link: "https://www.linkedin.com/in/sergiodiazleguizamon/"
        },
        {
          name:'Cv',
          fa:'fa fa-file-pdf',
          link: "https://drive.google.com/file/d/1fmNb4MoH9AjqeqPlZSGxTtaDwxo2N6yx/view?usp=sharing"
        },
        {
          name:'Email',
          fa:'fa fa-envelope-open-text',
          link: "mailto:sergiodiazleguizamon@gmail.com"
        }
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
              <i className={ social.fa} aria-hidden="true"></i> 
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Social;



