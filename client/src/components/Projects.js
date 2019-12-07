import React, { Component } from 'react'
import SymbioSound from '../images/symbiosound.png'
import TrackNotes from '../images/tracknotes.png'
import EquationSheetGenerator from '../images/esg.png'
import CharityRoulette from '../images/charityroulette.png'
import '../projects.css'
import { Link } from 'react-router-dom';

export class Projects extends Component {
  render() {
    return (
    <div>
        <h4 class="thin">Software Engineering Projects:</h4>
        <br></br>
        <div class="row">
        <Link to="/projects/symbiosound">
             <div class="column">
            <div class="project">
            <img class="project" src={SymbioSound} alt="SymbioSound"/>
            <p class="center thin">SymbioSound</p>
            </div>
        </div>
        </Link>
        <Link to="/projects/tracknotes">
        <div>
        <div class="column">
            <div class="project">
            <img class="project" src={TrackNotes} alt="TrackNotes"/>
            <p class="center thin">TrackNotes</p>
            </div>
            </div>
        </div>
        </Link>
        <Link to="/projects/equationsheetgenerator">
        <div>
        <div class="column">
            <div class="project">
            <img class="project" src={EquationSheetGenerator} alt="Equation Sheet Generator"/>
            <p class="center thin">Equation Sheet Generator</p>
            </div>
            </div>
        </div>
        </Link>
        <Link to="/projects/charityroulette">
        <div>
        <div class="column">
            <div class="project">
            <img class="project" src={CharityRoulette} alt="Charity Roulette"/>
            <p class="center thin">Charity Roulette</p>
            </div>
            </div>
        </div>
        </Link>
    </div>

<br></br>
<br></br>
<br></br>

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