import React, { Component } from 'react'
import llogo from '../images/llogo.png'
import glogo from '../images/glogo.png'


export class Footer extends Component {
  render() {
    return (
        <footer class="page-footer white">
            <hr></hr>
        <div class="container center">
          <div class="row">
            <div class="col l6 s12">
              <ul>
                <li><a href="https://www.linkedin.com/in/kpobrien4/"><img src={llogo} width="75" height="75" alt="LinkedIn"/></a></li>
              </ul>
            </div>
            <div class="col l6 s12">
              <ul>
                <li><a href="https://github.com/kpobrien4"><img src={glogo} width="75" height="75" alt="github"/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer