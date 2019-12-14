import React, { Component } from 'react'
import Monkey from '../images/monkey.jpeg'

export class Errors extends Component {
  render() {
    return (
      <div class="center">
        <br></br>
        <h4 class="thin">Get a grip there, buster! This page doesn't exist</h4>
        <br></br>
        <img src={Monkey} width="300" height="400" alt="Me"/>
        <h5 class="thin">Now you got my mans lookin at you like this</h5>
      </div>
    )
  }
}
export default Errors