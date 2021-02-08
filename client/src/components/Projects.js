import React, { Component } from 'react'
import SymbioSound from '../images/symbiosound.png'
import TrackNotes from '../images/tracknotes.png'
import EquationSheetGenerator from '../images/esg.png'
import CharityRoulette from '../images/charityroulette.png'
import PulsedNMR from '../images/pulsed-nmr.jpeg'
import HallEffect from '../images/halleffect.png'
import FluorescenceMicroscopy from '../images/fluorescence-microscopy.jpeg'
import OpticalSpectroscopy from '../images/opticalspectroscopy.png'
import ExpenseTracker from '../images/expensetracker.png'
import TwitterBot from '../images/twitter.jpeg'
import Lab1 from '../Optical_Spectroscopy.pdf'
import Lab2 from '../Pulsed_NMR.pdf'
import Lab3 from '../Hall_Effect-2.pdf'
import Lab4 from '../Fluorescence_Microscopy.pdf'
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
            <div class="project symbio-container">
            <img class="project hoverable symbio-image" src={SymbioSound} alt="SymbioSound"/>
            <div class="symbio-middle">
            <p class="center symbio-text">SymbioSound</p>
            </div>
            <br></br>
            <br></br>
            </div>
        </div>
        </Link>
        <Link to="/projects/tracknotes">
        <div>
        <div class="column">
            <div class="project track-container">
            <img class="project hoverable track-image" src={TrackNotes} alt="ProjectNotes"/>
            <div class="track-middle">
            <p class="center track-text">ProjectNotes</p>
            </div>
            <br></br>
            <br></br>
            </div>
            </div>
        </div>
        </Link>
        <Link to="/projects/equationsheetgenerator">
        <div>
        <div class="column">
            <div class="project equation-container">
            <img class="project hoverable equation-image" src={EquationSheetGenerator} alt="Equation Sheet Generator"/>
            <div class="equation-middle">
            <p class="center equation-text">Equation Sheet Generator</p>
            </div>
            <br></br>
            <br></br>
            </div>
            </div>
        </div>
        </Link>
        <Link to="/projects/charityroulette">
        <div>
        <div class="column">
            <div class="project charity-container">
            <img class="project hoverable charity-image" src={CharityRoulette} alt="Charity Roulette"/>
            <div class="charity-middle">
            <p class="center charity-text">Charity Roulette</p>
            </div>
            <br></br>
            <br></br>
            </div>
            </div>
        </div>
        </Link>
    </div>
    {/* <div class="row">
        <Link to="/projects/expensetracker">
             <div class="column">
            <div class="project expense-container">
            <img class="project hoverable expense-image" src={ExpenseTracker} alt="ExpenseTracker"/>
            <div class="expense-middle">
            <p class="center expense-text">Expense Tracker</p>
            </div>
            <br></br>
            <br></br>
            </div>
        </div>
        </Link> */}
        {/* <Link to="/projects/twitterbot">
             <div class="column">
            <div class="project twitter-container">
            <img class="project hoverable twitter-image" src={TwitterBot} alt="TwitterBot"/>
            <div class="twitter-middle">
            <p class="center twitter-text">Alibot</p>
            </div>
            <br></br>
            <br></br>
            </div>
        </div>
        </Link>
        </div> */}
    <h4 class="thin">Data Analysis/Physics Projects:</h4>
    <div class="row">
    <a href = {Lab2} target="_blank" rel="noopener noreferrer" class="thin black-text">
             <div class="column">
            <div class="project pulsed-container">
            <img class="project hoverable pulsed-image" src={PulsedNMR} alt="PulsedNMR"/>
            <div class="pulsed-middle">
            <p class="center pulsed-text">Pulsed NMR</p>
            </div>
            <br></br>
            <br></br>
            </div>
        </div>
        </a>
        <a href = {Lab3} target="_blank" rel="noopener noreferrer" class="thin black-text">
             <div class="column">
            <div class="project hall-container">
            <img class="project hoverable hall-image" src={HallEffect} alt="HallEffect"/>
            <div class="hall-middle">
            <p class="center hall-text">Hall Effect</p>
            </div>
            <br></br>
            <br></br>
            </div>
        </div>
        </a>
        <a href = {Lab1} target="_blank" rel="noopener noreferrer" class="thin black-text">
             <div class="column">
            <div class="project optical-container">
            <img class="project hoverable optical-image" src={OpticalSpectroscopy} alt="OpticalSpectroscopy"/>
            <div class="optical-middle">
            <p class="center optical-text">Optical Spectroscopy</p>
            </div>
            <br></br>
            <br></br>
            </div>
        </div>
        </a>
        <a href = {Lab4} target="_blank" rel="noopener noreferrer" class="thin black-text">
             <div class="column">
            <div class="project fluor-container">
            <img class="project hoverable fluor-image" src={FluorescenceMicroscopy} alt="FluorescenceMicroscopy"/>
            <div class="fluor-middle">
            <p class="center fluor-text">Fluorescence Microscopy</p>
            </div>
            <br></br>
            <br></br>
            </div>
        </div>
        </a>
    </div>
</div>

    )
  }
}

export default Projects