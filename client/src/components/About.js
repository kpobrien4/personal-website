import React, { Component } from 'react'
import '../about.css'
import Graduation from "../images/graduation.png"

export class About extends Component {

  constructor(){
    super();
    this.state = {loaded: false};
  }

  render() {
    return (
      <div>
        <div class="header">
        <h3 class="thin about">About Me</h3>
        </div>
        <p className="thin text-white aboutpic">Hello treasured reader! My name is Kevin and I'm a full stack software engineer from Orange County, New York. I graduated from the University at Buffalo in May of 2019 with a degree in Physics, and immediately attended Flatiron School, an immersive five month coding school in the field of software development where I learned and built projects with Ruby using the Rails framework, JavaScript, SQL, HTML, CSS, React.js, Redux, and more. I have since been working on a multitude of software projects, one of which is this very website! I have now begun my career in Apple's IS&T division as a developer, and have led successful projects using Java, Spring, Swift, Angular, and Oracle while working in an Agile team. My goal is to work for a company with the aim of making user friendly, and effective software that improves the daily lives of users, as well as being a valuable member of a team.</p>
        <p><img src={Graduation} style={this.state.loaded ? {} : {display: 'none'}} alt="graduation" class="responsive-img graduation aboutpic" width="350px" align="left" onLoad={() => this.setState({loaded: true})}></img></p>
        <i><h5 class="thin aboutpic">Outside of software development...</h5></i>
        <p className="thin text-white aboutpic">
          In addition to being a developer, due to my background in physics I have retained an interest in Data Science and Analytics, as well as Machine Learning and Artificial Intelligence. I have used analytical software such as Matlab, and Python to interpret physical data, and have created complicated models of these systems. Some of these can be viewed on my projects page! In my spare time, I am also working on a music studio start up called Top Shelf Sound in my hometown of Goshen, New York. Through working to build this studio, I have learned great interpersonal skills from working with many clients at a time, as well as excellent time management skills. 
        </p>
        <p className="thin text-white aboutpic">
          As I move forward as a developer one of the most important things for me is to be able to use my unique experience to provide innovative and creative solutions to complex problems. Please join me on this journey as I continue to learn and grow, you won't regret it!
        </p>
      </div>

    )
  }
}

export default About