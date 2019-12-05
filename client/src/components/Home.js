import React, { Component } from 'react'
import IMG_3226 from '../IMG_3226.PNG'

export class Home extends Component {
  render() {
    return (
      <div className="container home">
        <h1 class="center "><img src={IMG_3226} width="250" height="250" alt="Me"/></h1>
        <h1 class="center">Welcome!</h1>
      </div>
    )
  }
}

export default Home