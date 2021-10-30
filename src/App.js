import React, { Component } from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './components/About';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isHamActive: true
    }
  }
  hamToggle = () => {
    this.setState({
      isHamActive: !this.state.isHamActive
    })
  }
  render() {
    return (
      <div className="App" >
        <Router>
          <div className="header">
            <div className="logo">
              <img src="https://github.com/AaryanShaikh/badportfolio/blob/main/src/res/logo.png?raw=true" alt="" />
            </div>
            <div className="nav">
              <Link to="/"><p><span>H</span>ome</p></Link>
              <Link to="/about"><p><span>A</span>bout</p></Link>
              <p><span>P</span>rojects</p>
              <p><span>C</span>ontact</p>
            </div>
            <ul onClick={this.hamToggle} className={this.state.isHamActive ? "active" : ""}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}