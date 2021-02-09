import React, { Component } from 'react'
import fatherOfTheYear from '../images/fatherOfTheYear.png'
import Quotes from '../containers/Quotes'
import '../home.css'



export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    return (
      <div className="container home">
        <h1 class="center home1"><img onLoad={this.handleImageLoaded.bind(this)} src={fatherOfTheYear} width="250" height="250" alt="Me"/></h1>
        <h3 class="center white-text thin home3">Full Stack Web Developer</h3>
        <br></br>
        {/* <Quotes /> */}
      </div>
    )
  }
}

export default Home