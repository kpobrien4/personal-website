import React, { Component } from 'react'
import mp3 from '../testsonglmc.mp3'
import '../music.css'

export class Music extends Component {
  render() {
    return (
      <div>
        <h3 class="thin">Current Music Projects:</h3>
    <div>
        <hr class="full"></hr>
        <h5 class="thin song">Sleep Away (teaser)</h5> <audio controls controlsList="nodownload">
            <source src={mp3} type="audio/mpeg"></source>
        </audio>
    </div>
    <hr></hr>
    <h3 class="thin">Instruments and Technology:</h3>
    <ul class="list browser-default thin">
        <li>Logic Pro X</li>
        <li>M Audio Code 61</li>
        <li>Teenage Engineering OP-Z</li>
        <li>AKG P420 Condenser</li>
        <li>PreSonus AudioBox 96</li>
        <li>Ableton</li>
        <li>Macbook Pro</li>
        <li>Supro 2020BM Westbury Dual Pickup Island Series Electric Guitar</li>
        <li>Yamaha P45 Digital Piano</li>

    </ul>
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

export default Music