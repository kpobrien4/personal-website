import React, { Component } from 'react'

export class TwitterBot extends Component {
    render() {
        return (
      <div>
        <br></br>
          <h2 class="thin project-title">Alibot</h2><a href = "https://github.com/kpobrien4/Twitter-Bot" target="_blank" rel="noopener noreferrer"><button type="submit" class=" btn git right links waves-effect waves-light">GitHub</button></a><a href = "https://twitter.com/Alibot2020" target="_blank" rel="noopener noreferrer"><button type="submit" class=" btn demo right links waves-effect waves-light">Project</button></a>  
        <hr></hr>
        <p class="center-align skills">Skills demonstrated using Python, Tweepy, Omniauth</p>
        <p class="thin">
          The Alibot application was created as a joke, however it quickly proved to be an interesting challenge. After reading the book <i>The Count of Monte Cristo</i> by Alexandre Dumas, I developed an irrational fear of being framed for a crime that I haven't committed. Thus, the goal of this project was to create a twitter bot capable of absolving me from all potential crimes.
        </p>
        <p class="thin">
          The bot uses the Tweepy library 
        </p>
      </div>
        )
    }

}

export default TwitterBot