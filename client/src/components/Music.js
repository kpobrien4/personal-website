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