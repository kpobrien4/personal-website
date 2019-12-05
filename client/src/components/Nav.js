import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pdf from '../KOBRES.pdf'

export class Nav extends Component {
  render() {
    return (
      <nav className="light-blue darken-1">
        <div className="container">
          <Link to="/" className="brand-logo">Home</Link>
          <ul className="right">
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li><a href = {Pdf}>Resume</a></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav