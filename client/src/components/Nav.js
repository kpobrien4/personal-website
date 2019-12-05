import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pdf from '../KOBRES.pdf'

export class Nav extends Component {
  render() {
    return (
      <nav class="light-blue darken-1 hoverable" >
        <div className="container">
          <Link to="/" class="brand-logo thin">Kevin O'Brien</Link>
          <ul className="right">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href = {Pdf}>Resume</a></li>
            <li><a href = "https://kpobrien4.github.io/">Blog</a></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav