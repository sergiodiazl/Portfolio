import React, { Component } from 'react';
import './App.css';
import Scrollchor from 'react-scrollchor';
import Social from './Social';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div id="home">
          <h1 id="title">Hi, I'm Stella :)</h1>
          <p id="subtitle">I'm a full stack software engineer. I love solving tough problems and building cool products.</p>
          <Social
            iconColor='icon-white'
          />
          <div id="scroll-down">
            <h3>Learn more</h3>
            <Scrollchor to="#skills" animate={{ offset: -100 }}>
              <i className="fa fa-chevron-down fa-3x color-white" aria-hidden="true" ></i>
            </Scrollchor>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
