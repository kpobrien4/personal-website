import React, { Component } from 'react'
import Category from '../../images/charroul1.png'
import '../../project.css'

export class CharityRoulette extends Component {
  render() {
    return (
      <div>
        <div>
            <br></br>
            <h2 class="thin project-title">Charity Roulette</h2><button type="submit" class="thin btn git right links waves-effect waves-light">GitHub</button> <button type="submit" class="thin btn demo right links waves-effect waves-light">Demo</button>
        </div>
        <hr></hr>
        <p class="center-align">Skills demonstrated using Ruby, Nokogiri, Object Oriented Design</p>
        <p class="thin">
          Charity Roulette was my first CLI application, and my first project completed while attending Flatiron School. For the project, I utilized ruby basics to create a command line that prompts you through a multi-level Nokogiri scraped data list.
          The project was successful in expanding my knowledge of code, as it was my first attempt at utilizing the four pillars of object oriented programming, abstraction, encapsulation, inheritance and polymorphism. 
        </p>
        <p class="thin">
            The app was very simple in its design, however the core idea was to create a CLI application which randomly assigns a user a charity, and then randomly assigns them a dollar amount within a range inputted by that user, for them to donate to that charity. This was done by scraping an array of charity categories from charitynavigator.org, which would then be iterated over and displayed in the command line prompt. 
        </p>
        <p class="center-align">
        <img src={Category} alt="Category" width="600" height="100"></img>
        </p>
        <p class="thin">
            The user would then input the number corresponding to the category of charity they wanted, and would then be given a list of more specific subcategories for each category. For example, if our charitable user wanted to clean up the Earth and chose an environmental charity, they would then be given a choice between Environmental Protection and Conservation or Botanical Gardens, Parks, and Nature Centers. Using the .sample array method in ruby, a random element is chosen from the array of charities pertaining to that subcategory.
        </p>
        <p class="thin">
            After the charity has been assigned to a user, they then input a minimum value and maximum value from which they will be given another random value that will decide how much they can choose to donate to that charity. As mentioned earlier, this project demonstrated the four pillars of object oriented program through abstraction, the data from each category is exposed to the user, without showing uneccessary information about how it is done. Through encapsulation, each category is given as an example of the category class. Inheritance is what allows the CLI and category classes to both inherit gems from the charity_roulette ruby file. Finally, polymorphism explains how the children classes of charity_roulette.rb have access to all of its ruby gems, without that same file having any of the same functionality of CLI.rb or category.rb
        </p>
        <p class="thin">
            Though it was my first project, and can still use a lot of work, I still decided to include it to show how far I have come as a developer, from originally only creating command line applications, to now being able to create full web applications. It was also an incredible learning experience, which propelled my desire to code even larger applications down the line. 
        </p>

      </div>

    )
  }
}

export default CharityRoulette