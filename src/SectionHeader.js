import React, { Component } from 'react';
import './SectionHeader.css';

class SectionHeader extends Component {
  render() {
    return (
      <h1 className={`section-header ${this.props.name}`} >
        {this.props.title}
      </h1>
    );
  }
}

export default SectionHeader;
