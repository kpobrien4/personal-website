import React, { Component } from 'react'
import Category from '../../images/charroul1.png'
import '../../project.css'

export class ExpenseTracker extends Component {
    render() {
      return (
        <div>
          <div>
              <br></br>
              <h2 class="thin project-title">Expense Tracker</h2><a href = "https://github.com/kpobrien4/expense-tracker" target="_blank" rel="noopener noreferrer"><button type="submit" class="btn git right links waves-effect waves-light">GitHub</button></a> <a href = "https://youtu.be/42U-VjYRJqo" target="_blank" rel="noopener noreferrer"></a> 
          </div>
          <hr></hr>
          <p class="center-align skills">Skills demonstrated using Python, Pandas, OpenPYXL</p>
          <p class="thin">
            My first python project was an expense tracker app, which used the click library to generate a command line, with Pandas and openPYXL to write and interpret excel tables. The command line of this application prompts a user to enter the category their expense was contained in, and also the amount of money they've spent within that category, and then gives them the amount that they have remaining to spend in that category, and the total amount they have spent that month. 
          </p>
          <p class="thin">
          </p>
          <p class="center-align">

          </p>
          <p class="thin">

          </p>
          <p class="thin">
          </p>
          <p class="thin">
          </p>
  
        </div>
  
      )
    }
  }
  
  export default ExpenseTracker