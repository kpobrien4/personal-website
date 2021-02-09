import React, { Component } from 'react'
import fatherOfTheYear from '../images/fatherOfTheYear.png'
import Quotes from '../containers/Quotes'
import '../home.css'



export class Home extends Component {

  constructor(){
    super();
    this.state = {loaded: false};
  }
  render() {
    return (
      <div className="">
        <h1 class="center home1"><img style={this.state.loaded ? {} : {display: 'none'}} src={fatherOfTheYear} width="250" height="250" alt="Me" onLoad={() => this.setState({loaded: true})}/></h1>
        <h2 class="center white-text thin home3">Full Stack Web Developer</h2>
        <h5 class="center white-text thin">A developer eager to create quality software that can improve the lives of others</h5>
        <br></br>
        {/* <Quotes /> */}
        {/* <hr></hr> */}
        {/* <h2 class="center white-text thin">Skills</h2> */}
      </div>
    )
  }
}

export default Home