import React, { Component } from 'react'

export class EquationSheetGenerator extends Component {
  render() {
    return (
      <div>
          <br></br>
        <h2 class="thin project-title">Equation Sheet Generator</h2><a href = "https://github.com/kpobrien4/equation-sheet-generator" target="_blank" rel="noopener noreferrer"><button type="submit" class="btn git right links waves-effect waves-light">GitHub</button></a> <a href = "https://youtu.be/42U-VjYRJqo" target="_blank" rel="noopener noreferrer"><button type="submit" class="btn demo right links waves-effect waves-light">Demo</button></a> 
        <hr></hr>
        <p class="center-align skills">Skills demonstrated using Object Oriented JavaScript, AJAX, serialized JSON, HTML, CSS, Ruby on Rails</p>
        <p class="thin">
          In my time in college achieving my undergraduate degree, I spent way more time than I would care to admit creating equation sheets, or rather, insuring that I could fit every equation from a quantum mechanics textbook onto an 8.5x11 piece of paper. This task afflicted me with hand cramps, and headaches, as well as adding a considerable amount of time and stress due to throwing out sheets and starting over because I did not write small enough. I always thought it would be awesome to have an application that allows you to create equation sheets for you, and so upon developing the skills to do so I created that myself!
        </p>

        <p class="thin">
            Equation Sheet Generator utilizes a JavaScript front end with a Ruby on Rails API. The app functions relaitvely simply, as a service to add an equation and a name of that equation to a sheet, and have it all saved in one place. The equations can then be deleted, or updated at your leisure. The data submitted in the frontend is then persisted in the backend using AJAX requests.
        </p>
        <p class="thin">
            This application was my first JavaScript project, and as such was one of my more difficult challenges at Flatiron School, however the idea was something that I believed in and felt could be useful to others which allowed me to motivate myself to create it. Given the nature of the program, we had a week to work on each project and thus were only asked to create a minimum viable product, however this project still has some improvements I would love to add. 
        </p>

        <p class="thin">
          Future goals and improvements on this project involve adding LaTeX equation formatting (potentially through an outside JavaScript directory), allowing each field to display information about that field on click, providing base equations for each field, and formatting of the equation sheet so that it scales to an 8.5x11 piece of paper.
        </p>


      </div>

    )
  }
}

export default EquationSheetGenerator