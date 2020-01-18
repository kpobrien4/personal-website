import React, { Component } from 'react'
import Category from '../../images/charroul1.png'
import '../../project.css'

export class ExpenseTracker extends Component {
    render() {
      return (
        <div>
          <div>
              <br></br>
              <h2 class="thin project-title">Expense Tracker</h2><a href = "https://github.com/kpobrien4/expense-tracker" target="_blank" rel="noopener noreferrer"><button type="submit" class="thin btn git right links waves-effect waves-light">GitHub</button></a> <a href = "https://youtu.be/42U-VjYRJqo" target="_blank" rel="noopener noreferrer"></a> 
          </div>
          <hr></hr>
          <p class="center-align skills">Skills demonstrated using Python, Pandas, OpenPYXL</p>
          <p class="thin">
            My first python project was an expense tracker app, which used the click library to generate a command line, with Pandas and openPYXL to write and interpret excel tables.
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