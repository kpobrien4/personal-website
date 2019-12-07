import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'
import Music from './components/Music'
import './App.css';



class App extends Component {
  render(){
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/music" component={Music} />
        </Switch>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </Router>
  );
  }
}


export default App;
