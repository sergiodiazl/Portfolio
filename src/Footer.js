import React, { Component } from 'react';
import Social from './Social';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Social
          iconColor='icon-white'
        />
        <p>&copy;Sergio Diaz Leguizamón -2018</p>
      </footer>
    );
  }
}

export default Footer;



