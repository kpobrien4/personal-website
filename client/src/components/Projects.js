import React, { Component } from 'react'
import SymbioSound from '../images/symbiosound.png'
import TrackNotes from '../images/tracknotes.png'
import EquationSheetGenerator from '../images/esg.png'
import CharityRoulette from '../images/charityroulette.png'
import PulsedNMR from '../images/pulsed-nmr.jpeg'
import HallEffect from '../images/halleffect.png'
import FluorescenceMicroscopy from '../images/fluorescence-microscopy.jpeg'
import OpticalSpectroscopy from '../images/opticalspectroscopy.png'
import '../projects.css'
import { Link } from 'react-router-dom';

export class Projects extends Component {
    constructor(props){
        super(props)
        this.myFunction()
    }
    
    myFunction() {
        this.props.history.push("/projects");
      }


  render() {
    return (
    <div>
        <h4 class="thin">Software Engineering Projects:</h4>
        <div class="row">
        <Link to="/projects/symbiosound">
             <div class="column">
            <div class="project">
            <img class="project hoverable" src={SymbioSound} alt="SymbioSound"/>
            <p class="center thin">SymbioSound</p>
            </div>
        </div>
        </Link>
        <Link to="/projects/tracknotes">
        <div>
        <div class="column">
            <div class="project">
            <img class="project hoverable" src={TrackNotes} alt="TrackNotes"/>
            <p class="center thin">TrackNotes</p>
            </div>
            </div>
        </div>
        </Link>
        <Link to="/projects/equationsheetgenerator">
        <div>
        <div class="column">
            <div class="project">
            <img class="project hoverable" src={EquationSheetGenerator} alt="Equation Sheet Generator"/>
            <p class="center thin">Equation Sheet Generator</p>
            </div>
            </div>
        </div>
        </Link>
        <Link to="/projects/charityroulette">
        <div>
        <div class="column">
            <div class="project">
            <img class="project hoverable" src={CharityRoulette} alt="Charity Roulette"/>
            <p class="center thin">Charity Roulette</p>
            </div>
            </div>
        </div>
        </Link>
    </div>
    <br></br>
    <h4 class="thin">Data Analysis/Physics Projects:</h4>
    <div class="row">
    <Link to="/projects/pulsednmr">
             <div class="column">
            <div class="project">
            <img class="project hoverable" src={PulsedNMR} alt="PulsedNMR"/>
            <p class="center thin">Pulsed NMR</p>
            </div>
        </div>
        </Link>
        <Link to="/projects/halleffect">
             <div class="column">
            <div class="project">
            <img class="project hoverable" src={HallEffect} alt="HallEffect"/>
            <p class="center thin">Hall Effect</p>
            </div>
        </div>
        </Link>
        <Link to="/projects/opticalspectroscopy">
             <div class="column">
            <div class="project">
            <img class="project hoverable" src={OpticalSpectroscopy} alt="OpticalSpectroscopy"/>
            <p class="center thin">Optical Spectroscopy</p>
            </div>
        </div>
        </Link>
        <Link to="/projects/fluorescencemicroscopy">
             <div class="column">
            <div class="project">
            <img class="project hoverable" src={FluorescenceMicroscopy} alt="FluorescenceMicroscopy"/>
            <p class="center thin">Fluorescence Microscopy</p>
            </div>
        </div>
        </Link>
    </div>
</div>

    )
  }
}

export default Projects