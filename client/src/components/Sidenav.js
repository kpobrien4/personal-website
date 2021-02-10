import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import Pdf2 from '../kevinobrienresume.pdf'
import "materialize-css/dist/css/materialize.min.css";


export class Sidenav extends Component {
componentDidMount(){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.sidenav');
    var instances = M.Sidenav.init(elems, {
      edge: "left",
      inDuration: 250});
  });
}

  render() {
    return (
      
      <div>

      <ul class="sidenav" id="slide-out">
        <li><Link to="/" class="thin black-text sidenav-close"><i class="material-icons">home</i></Link></li>
        <hr></hr>
            <li><Link to="/about" class="thin black-text sidenav-close">About</Link></li>
            <li><Link to="/projects" class="thin black-text sidenav-close">Projects</Link></li>
            <li><a href = {Pdf2} target="_blank" rel="noopener noreferrer" class="thin black-text sidenav-close">Resume</a></li>
            {/* <li><a href = "https://kpobrien4.github.io/" target="_blank" rel="noopener noreferrer" class="thin black-text sidenav-close">Blog</a></li> */}
            {/* <li><Link to="/music" class="thin black-text sidenav-close">Music</Link></li> */}
            <li><Link to="/contact" class="thin black-text sidenav-close">Contact</Link></li>
      </ul>
      
      </div>

    )
  }
}

export default Sidenav