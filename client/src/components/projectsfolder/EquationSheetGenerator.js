import React, { Component } from 'react'

export class EquationSheetGenerator extends Component {
  render() {
    return (
      <div>
          <br></br>
        <h2 class="thin project-title">Equation Sheet Generator</h2><button type="submit" class="thin btn git right links waves-effect waves-light">GitHub</button> <button type="submit" class="thin btn demo right links waves-effect waves-light">Demo</button>
        <hr></hr>
        <p class="center-align skills">Skills demonstrated using Object Oriented JavaScript, AJAX, serialized JSON, HTML, CSS, Ruby on Rails</p>
        <p class="thin">
          In my time in college achieving my undergraduate degree, I spent way more time than I would care to admit creating equation sheets, or rather, insuring that I could fit every equation from a quantum mechanics textbook onto an 8.5x11 piece of paper. This task afflicted me with hand cramps, and headaches, as well as adding a considerable amount of time and stress due to throwing out sheets and starting over because I did not write small enough. I always thought it would be awesome to have an application that allows you to create equation sheets for you, and so upon developing the skills to do so I created that myself!
        </p>

        <p class="thin">
            Equation Sheet Generator utilizes a JavaScript front end with a Ruby on Rails API. 
        </p>

        <p class="thin">
          Future goals and improvements on this project involve adding LaTeX equation formatting (potentially through an outside JavaScript directory), allowing each field to display information about that field on click, and formatting of the equation sheet so that it scales to an 8.5x11 piece of paper.
        </p>


      </div>

    )
  }
}

export default EquationSheetGenerator