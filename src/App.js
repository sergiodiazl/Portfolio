import React, { Component } from 'react';

import './App.css';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Navigation from './Navigation';
import Header from './Header';
import OtherProjects from './OtherProjects';
import { SPANISH, ENGLISH } from './Texts';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language:SPANISH,
    }
    this.changeLanguage=this.changeLanguage.bind(this);    
  }
  changeLanguage(){
    if(this.state.language===SPANISH){
        this.setState({language:ENGLISH})
    }else{
        this.setState({language:SPANISH})
    }
}
  render() {
    return (
      <div className="App">
        <Navigation changeLanguage={this.changeLanguage} language={this.state.language}/>
        <Header  language={this.state.language}/>
        <Skills  language={this.state.language}/>
        <Projects  language={this.state.language}/>
        <OtherProjects language={this.state.language} />
        <About  language={this.state.language}/>
        <Footer />
      </div>
    );
  }
}

export default App;
