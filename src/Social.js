import React, { Component } from 'react';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [
        {
          name: 'GitHub',
          fontawesome: 'fa-github',
          link: "https://github.com/stella-yc"
        },
        {
          name: 'Stack Overflow',
          fontawesome: 'fa-stack-overflow',
          link: 'https://stackoverflow.com/story/stellachung'
        },
        {
          name: 'Twitter',
          fontawesome: 'fa-twitter',
          link: "https://twitter.com/stellasighs"
        },
        {
          name: 'Medium',
          fontawesome: 'fa-medium',
          link: "https://medium.com/@stll.chung"
        },
        {
          name: 'LinkedIn',
          fontawesome: 'fa-linkedin',
          link: "https://www.linkedin.com/in/chungstella/"
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
            <a href={social.link} className={this.props.iconColor}
              target="_blank" rel="noopener noreferrer">
              <i className={`fa ${social.fontawesome} fa-2x`} aria-hidden="true"></i>
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Social;



