import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pdf from '../KOBRES.pdf'
import "materialize-css/dist/css/materialize.min.css";
import '../nav.css'


export class Nav extends Component {

  render() {
    return (
      <div class="navbar-fixed">
      <nav class="white hoverable">
        <div className="container">
          <Link to="/" class="brand-logo thin black-text">Kevin O'Brien</Link>
          <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons black-text">menu</i></a>
          <ul className="right" media="(max-width: 800px)">
            <li media="(max-width: 800px)"><Link to="/about" class="thin black-text">About</Link></li>
            <li media="(max-width: 800px)"><Link to="/projects" class="thin black-text">Projects</Link></li>
            <li media="(max-width: 800px)"><a href = {Pdf} target="_blank" rel="noopener noreferrer" class="thin black-text">Resume</a></li>
            <li media="(max-width: 800px)"><a href = "https://kpobrien4.github.io/" target="_blank" rel="noopener noreferrer" class="thin black-text">Blog</a></li>
            <li media="(max-width: 800px)"><Link to="/music" class="thin black-text">Music</Link></li>
            <li media="(max-width: 800px)"><Link to="/contact" class="thin black-text">Contact</Link></li>
          </ul>
          
        </div>
        
      </nav>

    </div>

    )
  }
}

export default Nav