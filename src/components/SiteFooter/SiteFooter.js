import React, { Component } from 'react';
import './SiteFooter.css';

class SiteFooter extends Component {
  copyrightYear() {
    let d = new Date()
    return d.getFullYear()
  }
  
  render() {
    return (
    <footer>&copy; <strong>graze</strong> {this.copyrightYear()}</footer>
    );
  }
}


export default SiteFooter;