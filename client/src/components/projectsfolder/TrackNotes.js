import React, { Component } from 'react'
import TrackPic from '../../images/trackpic.png'

export class TrackNotes extends Component {
  render() {
    return (
      <div>
        <div>
            <br></br>
            <h2 class="thin project-title">ProjectNotes</h2><a href = "https://github.com/kpobrien4/react-final-project-hr" target="_blank" rel="noopener noreferrer"><button type="submit" class="btn git right links waves-effect waves-light">GitHub</button></a> <a href = "http://projectnotes.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button type="submit" class="btn demo right links waves-effect waves-light">Demo</button></a> 
        </div>
        <hr></hr>
        <p class="center-align skills">Skills demonstrated using React.js, Redux, Rails API, PostgreSQL, HTML, CSS, Thunk Middleware, AJAX, RESTful Routes</p>
        <p class="thin">
          ProjectNotes was the last application that I created as a Flatiron student <small><small>:(</small></small> and served as my project for React and Redux. ProjectNotes is a simple notes app for musicians, allowing a user to store notes on a particular project either to create, or as you work.
        </p>
        <p class="thin"><img src={TrackPic} width="35%" alt="TrackNotes" class="responsive-img trackpic" align="left"></img></p>

        <p class="thin">
            The project idea was something I thought would be useful, as when I create music on my laptop using the digital audio workplace Logic Pro X, I save my project titles with names that often have nothing to do with the actual song, and thus many projects become a directionless mystery upon opening them. My idea was to create an application that can provide that direction and keep track of next steps so that great trains of thought don't get forgotten. 
        </p>

        <p class="thin">
            The app itself displays a list of the tracks a user has inputted, that are persisted in the rails backend through AJAX calls with Thunk middleware. The project has an index page where all of the tracks are available, a new page for instantiation of new tracks, and a show page which displays the information about a particular track. The state of the react components is controlled by the track reducer, which modifies the state based on a particular case.
        </p>

      </div>

    )
  }
}

export default TrackNotes