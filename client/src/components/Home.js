import React, { Component } from 'react'
import IMG_3226 from '../images/IMG_3226.PNG'
import Quotes from '../containers/Quotes'
import '../home.css'



export class Home extends Component {
  render() {
    return (
      <div className="container home">
        <h1 class="center home1"><img src={IMG_3226} width="250" height="250" alt="Me"/></h1>
        <h3 class="center black-text thin home3">Full Stack Web Developer</h3>
        <br></br>
        <Quotes />
      </div>
      
    )
  }
}

export default Home