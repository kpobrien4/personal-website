import React, { Component } from 'react'

export class SymbioSound extends Component {
  render() {
    return (
      <div>
         <div>
            <br></br>
            <h2 class="thin project-title">SymbioSound</h2><a href = "https://github.com/kpobrien4/rails-final-project" target="_blank" rel="noopener noreferrer"><button type="submit" class="thin btn git right links waves-effect waves-light">GitHub</button></a> <a href = "https://youtu.be/Utj_I0vIIJo" target="_blank" rel="noopener noreferrer"><button type="submit" class="thin btn demo right links waves-effect waves-light">Demo</button></a> 
        </div>
        <hr></hr>
        <p class="center-align skills">Skills demonstrated using Ruby on Rails, MVC Framework, SQLite, HTML, CSS, Omniauth, RESTful Routes</p>
        <p class="thin">
          SymbioSound is a collaborative music network created to tackle the issue of lacking inspiration, and motivation among creative individuals. The application utilizes a Ruby on Rails MVC framework with RESTful routing, providing full CRUD functionality with the intention of artists being able to create and share their incomplete music projects, in order to be completed or worked on by another users. The idea came to me while working in my friend's music studio, years before having any knowledge of software development, or basic computer science. Some days in the studio we would remark on how convenient it would be to have an in house bass player, or an excellent vocalist and lyricist who could work on one of our pop songs. This inspired me to try to create a project that would allow artists to quickly and easily connect, as well as being compensated for their time and creativity where that would not otherwise happen. A user can also post their skillset as an artist, so that another user searching for those skills can quickly contact them rather than creating their own post.
          </p>
          <p class="thin">
           This application features user creation and validation, as well as handling invalid data through backend validations of username and password inputs, and password security through the Ruby bcrypt gem. It also features Omniauth 3rd party login from Facebook. Additionally, the project has a functioning search bar for finding a specific project by name, or an artist by their skills.
        </p>

        <p class="thin">
          Potential improvements to the project include formatting and design of the web page, as well as adding comments, user reviews and profiles, and integrating a payment system through the application itself. This project is something that I am passionate about and have cared about for years, and it has been incredibly fulfilling to actually build it out as my first rails creation.
        </p>
      </div>

    )
  }
}

export default SymbioSound