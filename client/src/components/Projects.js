import React, { Component } from 'react'
import SymbioSound from '../images/symbiosound.png'
import TrackNotes from '../images/tracknotes.png'
import EquationSheetGenerator from '../images/esg.png'
import '../projects.css'

export class Projects extends Component {
  render() {
    return (
    <div>
        <h4 class="thin">Software Engineering Projects</h4>
        <div class="row">
             <div class="column">
            <div class="project">
            <img class="project" src={SymbioSound} alt="SymbioSound"/>
            <h5 class="center thin">SymbioSound</h5>
            </div>
        </div>
        <div>
            <div class="project">
            <img class="project" src={TrackNotes} alt="TrackNotes"/>
            <h5 class="center thin">TrackNotes</h5>
            </div>
            </div>
        <div>
            <div class="project">
            <img class="project" src={EquationSheetGenerator} alt="Equation Sheet Generator"/>
            <h5 class="center thin">Equation Sheet Generator</h5>
            </div>
        </div>
    </div>

<br></br>
<br></br>
<br></br>
        <ul>
            <li>SymbioSound</li>
            <li>TrackNotes</li>
            <li>Equation Sheet Generator</li>
            <li>Charity Roulette</li>
        </ul>
        <h4 class="thin">Data Analysis/Physics Projects</h4>
        <ul>
            <li>Pulsed NMR</li>
            <li>Hall Effect</li>
            <li>Optical Spectroscopy</li>
            <li>Fluorescence Microscopy</li>
        </ul>
        <br></br>
        <br></br>
        
      </div>

    )
  }
}

export default Projects