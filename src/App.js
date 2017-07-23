import React, { Component } from 'react';

import './App.css';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Navigation from './Navigation';
import Header from './Header';

class App extends Component {
  render() {
    console.log('scrolltop', )
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
