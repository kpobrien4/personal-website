import React, { Component } from 'react'

export class TwitterBot extends Component {
    render() {
        return (
      <div>
        <br></br>
          <h2 class="thin project-title">Twitter Bot</h2><a href = "https://github.com/kpobrien4/Twitter-Bot" target="_blank" rel="noopener noreferrer"><button type="submit" class=" btn git right links waves-effect waves-light">GitHub</button></a><a href = "https://twitter.com/MyBotPy" target="_blank" rel="noopener noreferrer"><button type="submit" class=" btn demo right links waves-effect waves-light">Project</button></a>  
        <hr></hr>
        <p class="center-align skills">Skills demonstrated using Python, Tweepy, Omniauth</p>
        <p class="thin">
          My Twitter Bot application was created using Python, and initially served as a playground to explore the Twitter API, as well as the Tweepy libraries. 
        </p>
      </div>
        )
    }

}

export default TwitterBot