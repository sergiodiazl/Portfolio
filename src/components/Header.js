import React, { Component } from 'react';
import './Header.css';
import '../animations.css';
import Social from './Social';
import Scroll from 'react-scroll';
const Link = Scroll.Link;



class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
      language:this.props.language,
    }
  }
  componentWillReceiveProps({language}) {
    this.setState({...this.state,language})
  }
  render() {
    const{headerTitle,headerSubtitle,headerSeeMore}=this.state.language;
    return (
      <header className="header fadeIn">
          <div className="header-text">
            <h1 className="header-title">{headerTitle}</h1>
            <p className="header-subtitle">{headerSubtitle}</p>
          </div>
          <Social
            iconColor='icon-white'
          />
          <div className="header-learnmore pulse">
            <h3>{headerSeeMore}</h3>
            <Link
            activeClass="active"
            to="projects-element"
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}>
              <i className="fa fa-chevron-down chevron-down fa-2x" aria-hidden="true"></i>
            </Link>
          </div>
      </header>
    );
  }
}

export default Header;
