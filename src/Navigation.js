import React, { Component } from 'react';
import './Navigation.css';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: 'nav-v1',
      text: 'logo-v1',
      button:'logo-v1 language-button',
      language:this.props.language,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentWillReceiveProps({language}) {
    this.setState({...this.state,language})
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if (window.pageYOffset > 0) {
      this.setState({ nav: 'nav-v2', text: 'logo-v2', button:'logo-v2 language-button', })
    } else if (window.pageYOffset === 0) {
      this.setState({ nav: 'nav-v1', text: 'logo-v1', button:'logo-v1 language-button', })
    }
  }

  render() {
    const {navSkills,navPortfolio,navProjects,navAbout,languageButton}=this.state.language
    return (
      <nav className={`nav nav-sticky ${this.state.nav}`}>
        <a onClick={() => scroll.scrollToTop()}>
        </a>
        <ul className="nav-list">
         
          <li><Link
            activeClass="active"
            to="projects-element"
            spy={true}
            smooth={true}
            duration={400}
            offset={0}>
            <span className={this.state.text}>{navPortfolio}</span>
          </Link></li>
          <li><Link
            activeClass="active"
            to="skills-element"
            spy={true}
            smooth={true}
            duration={400}
            offset={0}>
            <span className={this.state.text}>{navSkills}</span>
          </Link></li>
          <li><Link
            activeClass="active"
            to="other-element"
            spy={true}
            smooth={true}
            duration={400}
            offset={0}>
            <span className={this.state.text}>{navProjects}</span>
          </Link></li>
          <li><Link
            activeClass="active"
            to="about-element"
            spy={true}
            smooth={true}
            duration={400}
            offset={0}>
            <span className={this.state.text}>{navAbout}</span>
          </Link></li>
          <li>
            <button className={this.state.button}onClick={this.props.changeLanguage}>{languageButton}</button>
          </li>
        </ul>
      
      </nav>

    )
  }
}

export default Navigation;
