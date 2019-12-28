import React, { Component } from 'react'
import TrackPic from '../../images/tracknotes.png'

export class TrackNotes extends Component {
  render() {
    return (
      <div>
        <div>
            <br></br>
            <h2 class="thin project-title">TrackNotes</h2><a href = "https://github.com/kpobrien4/react-final-project-hr" target="_blank" rel="noopener noreferrer"><button type="submit" class="thin btn git right links waves-effect waves-light">GitHub</button></a> <a href = "https://youtu.be/Asj28Dqm43g" target="_blank" rel="noopener noreferrer"><button type="submit" class="thin btn demo right links waves-effect waves-light">Demo</button></a> 
        </div>
        <hr></hr>
        <p class="center-align skills">Skills demonstrated using React.js, Redux, Rails API, PostgreSQL, HTML, CSS, Thunk Middleware, AJAX, RESTful Routes</p>
        <p class="thin">
          TrackNotes was the last application that I created as a Flatiron student <small><small>:(</small></small> and served as my project for React and Redux. TrackNotes is a simple notes app for musicians, allowing a user to store notes on a particular project either to create, or as you work.
        </p>
        <p class="center"><img src={TrackPic} width="25%" alt="TrackNotes" class="responsive-img"></img></p>

        <p class="thin">
            The project idea was something I thought would be useful, as when I create music on my laptop using the digital audio workplace Logic Pro X, I save my project titles with names that often have nothing to do with the actual song, and thus many projects become a directionless mystery upon opening them. My idea was to create an application that can provide that direction and keep track of next steps so that great trains of thought don't get forgotten. 
        </p>

        <p class="thin">
            The app itself displays a list of the 
        </p>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </div>

    )
  }
}

export default TrackNotes