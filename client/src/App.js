import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Sidenav from './components/Sidenav';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import SymbioSound from './components/projectsfolder/SymbioSound'
import EquationSheetGenerator from './components/projectsfolder/EquationSheetGenerator'
import TrackNotes from './components/projectsfolder/TrackNotes'
import CharityRoulette from './components/projectsfolder/CharityRoulette'
import Contact from './components/Contact'
import Music from './components/Music'
import Errors from './components/Errors'
import './App.css';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  
  render(){
  return (
    <HashRouter hashType="noslash">
      <Nav />
      <Sidenav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/projects/symbiosound" component={SymbioSound} />
          <Route exact path="/projects/tracknotes" component={TrackNotes} />
          <Route exact path="/projects/equationsheetgenerator" component={EquationSheetGenerator} />
          <Route exact path="/projects/charityroulette" component={CharityRoulette} />
          <Route component={Errors} />
        </Switch>
      </div>

      <br></br>
      <Footer />
    </HashRouter>
  );
  }
}


export default App;
