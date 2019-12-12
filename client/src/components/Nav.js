import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import Pdf from '../KOBRES.pdf'


export class Nav extends Component {
componentDidMount(){
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {
      edge: "left",
      inDuration: 250});
  });
}

  render() {
    return (
      <div class="navbar-fixed">
      <nav class="white hoverable" >
        <div className="container">
          <Link to="/" class="brand-logo thin black-text">Kevin O'Brien</Link>
          <ul className="right">
            <li><Link to="/about" class="thin black-text">About</Link></li>
            <li><Link to="/projects" class="thin black-text">Projects</Link></li>
            <li><a href = {Pdf} target="_blank" rel="noopener noreferrer" class="thin black-text">Resume</a></li>
            <li><a href = "https://kpobrien4.github.io/" target="_blank" rel="noopener noreferrer" class="thin black-text">Blog</a></li>
            <li><Link to="/music" class="thin black-text">Music</Link></li>
            <li><Link to="/contact" class="thin black-text">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
      <li><Link to="/about" class="thin black-text">About</Link></li>
            <li><Link to="/projects" class="thin black-text">Projects</Link></li>
            <li><a href = {Pdf} target="_blank" rel="noopener noreferrer" class="thin black-text">Resume</a></li>
            <li><a href = "https://kpobrien4.github.io/" target="_blank" rel="noopener noreferrer" class="thin black-text">Blog</a></li>
            <li><Link to="/music" class="thin black-text">Music</Link></li>
            <li><Link to="/contact" class="thin black-text">Contact</Link></li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>

    )
  }
}

export default Nav