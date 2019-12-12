import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pdf from '../KOBRES.pdf'
import "materialize-css/dist/css/materialize.min.css";


export class Nav extends Component {

  render() {
    return (
      <div class="navbar-fixed">
      <nav class="white hoverable">
        <div className="container">
          <Link to="/" class="brand-logo thin black-text">Kevin O'Brien</Link>
          <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons black-text">menu</i></a>
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

    </div>

    )
  }
}

export default Nav