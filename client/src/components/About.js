import React, { Component } from 'react'
import '../about.css'
import Graduation from "../images/graduation.png"

export class About extends Component {

  render() {
    return (
      <div>
        <div class="header">
        <h3 class="thin about">About Me</h3>
        </div>
        <p class="thin">Hello treasured reader! My name is Kevin and I'm a software engineer, physicist, and musician from upstate New York. I graduated from the University at Buffalo in May of 2019 with a degree in Physics, and immediately attended Flatiron School, an immersive five month coding school in the field of software development where I learned and built projects with coding languages such as ruby (including rails), JavaScript, SQL, HTML, CSS, React.js, Redux, and more. I have since been working on a myriad of software projects, one of which is this very website! My goal is to create software, or work for a company that creates software with the aim of making a large impact on solving problems for people in need. I hope to be an inspiring and creative developer, who is always striving to learn and teach others. My current short term goals outside of work are to complete the courses in which I am enrolled to learn Python and Linux, and in the long term to enroll in graduate school in either physics or computer science.</p>
        <p><img src={Graduation} alt="graduation" class="responsive-img graduation" width="350px" align="left"></img></p>
        <p class="thin">My introduction to coding came in around 2016, at the onset of my college career, with a video called "What Most Schools Don't Teach" which featured the likes of tech household names such as Bill Gates, Mark Zuckerberg and Jack Dorsey, and those less known for their coding exploits like Will.I.Am of the Black Eyed Peas talking about their experiences with computer programming. Though I did not rush to coding immediately after watching the video, I downloaded a couple of tutorials, and kept the idea of learning code in the back of my mind. After finishing my degree in Physics, I opted to change my route and enroll in Flatiron School, as the versatility and creativity I had seen in software development were incredibly appealing to me, and I have now grown into a knowledge hungry developer. My love for physics still remains, and if anything enhances my coding abilities.
        </p>
        <p class="thin">
         Within the many projects and labs I have worked on in Physics I have utilized analytical software like MatLab, and Mathematica to plot graphs of large sets of data, compute complex equations, and interpret that information using high level mathematics, visualization software, and good old physics intuition. Additionally, I plan to learn Python with a strong emphasis in machine learning in order to be a valuable asset not only as a Software Engineer, but as a Data Scientist as well.
         </p>
        <p class="thin">
          During my time in Buffalo, one of the most important things I have learned other than chicken wing elitism is how to manage the time I spend doing the things I love. Being enrolled in my last semester of college as a physicist, and a full time coding school, while also maintaining a social life, creative musical pursuits, and being a part of the UB boxing club, forced me to not only become exceptionally skilled at budgeting my time but also motivated me to excel in each of those domains. As I move forward as a developer, one of the most important things for me is balance, and insuring that I can continue to explore these appealing avenues that continue to crop up in my life and give me a unique perspective as a problem solver and engineer. Please join me on this journey as I continue to learn and grow, you won't regret it!
        </p>
      </div>

    )
  }
}

export default About