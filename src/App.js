import React, { Component } from 'react';

import './App.css';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Navigation from './Navigation';
import Header from './Header';
import OtherProjects from './OtherProjects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Skills />
        <Projects />
        <OtherProjects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
