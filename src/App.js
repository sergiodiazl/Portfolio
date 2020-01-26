import React, { Component } from 'react';
import ReactGA from 'react-ga';

import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import OtherProjects from './components/OtherProjects';
import { SPANISH, ENGLISH } from './Texts';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language:ENGLISH,
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
        <Projects  language={this.state.language}/>
        <Skills  language={this.state.language}/>
        
        <OtherProjects language={this.state.language} />
        <About  language={this.state.language}/>
        <Footer />
      </div>
    );
  }
}
ReactGA.initialize('UA-156976179-1');
ReactGA.pageview('/');
export default App;
