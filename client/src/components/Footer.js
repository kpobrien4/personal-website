import React, { Component } from 'react'
import llogo from '../images/llogo.png'
import glogo from '../images/glogo.png'
import '../footer.css'

export class Footer extends Component {
  render() {
    return (
        <footer class="page-footer white">
        <div class="container center">
          <div class="row">
            <div class="col l6 s12">
              <ul>
                <li><a href="https://www.linkedin.com/in/kpobrien4/" target="_blank" rel="noopener noreferrer"><img src={llogo} width="75" height="75" alt="LinkedIn"/></a></li>
              </ul>
            </div>
            <div class="col l6 s12">
              <ul>
                <li><a href="https://github.com/kpobrien4" target="_blank" rel="noopener noreferrer"><img src={glogo} width="75" height="75" alt="github"/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div style={{color:"black"}} class="container">
          © 2021 Kevin O'Brien
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer