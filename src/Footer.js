import React, { Component } from 'react';
import Social from './Social';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Social
          iconColor='icon-black'
        />
        <p>&copy;Stella Chung</p>
      </footer>
    );
  }
}

export default Footer;



