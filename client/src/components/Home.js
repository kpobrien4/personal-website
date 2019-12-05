import React, { Component } from 'react'
import IMG_3226 from '../IMG_3226.PNG'

export class Home extends Component {
  render() {
    return (
      <div className="container home">
        <h1 class="center"><img src={IMG_3226} width="200" height="200" alt="Me"/></h1>
        <h1 class="center">Welcome!</h1>
        {/* <Document src={Resume} alt="Resume"/> */}
      </div>
    )
  }
}

export default Home