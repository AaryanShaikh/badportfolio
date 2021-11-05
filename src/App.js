import React, { Component } from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isHamActive: true,
      isLoaded: false
    }
  }
  hamToggle = () => {
    this.setState({
      isHamActive: !this.state.isHamActive
    })
  }
  loaded = () => {
    this.setState({
      isLoaded: true
    })
  }
  componentDidMount = () => {
    window.mouseFollow()
    setTimeout(() => {
      this.loaded()
    }, 5000)
  }
  makeCircleVanish = () => {
    document.getElementById("mouse-circle").style.opacity = "0"
  }
  makeCircleAppear = () => {
    document.getElementById("mouse-circle").style.opacity = "1"
  }
  makeCircleBigger = () => {
    document.getElementById("mouse-circle").style.height = "60px"
    document.getElementById("mouse-circle").style.width = "60px"
    document.getElementById("mouse-circle").style.borderRadius = (this.state.isHamActive) ? "50%" : "10%"
  }
  makeCircleSmall = () => {
    document.getElementById("mouse-circle").style.height = "30px"
    document.getElementById("mouse-circle").style.width = "30px"
    document.getElementById("mouse-circle").style.borderRadius = "50%"
  }
  makeCircleBorder = (e) => {
    e.target.style.border = "3px solid #2eac68"
    document.getElementById("mouse-circle").style.opacity = "0"
  }
  remCircleBorder = (e) => {
    e.target.style.border = "3px solid aliceblue"
    document.getElementById("mouse-circle").style.opacity = "1"
  }
  render() {
    if (!this.state.isLoaded) {
      return <div className="load">
        <img src="/load.gif" alt="" />
      </div>
    } else {
      return (
        <div className="App" >
          <Router>
            <div className="header">
              <div className="logo">
                <img src="/logo.png" alt="" onMouseOver={this.makeCircleBorder} onMouseOut={this.remCircleBorder} />
              </div>
              <div className={this.state.isHamActive ? "nav" : "nav hide"}>
                <Link to="badportfolio/" onMouseOver={this.makeCircleVanish} onMouseOut={this.makeCircleAppear}><p><span>H</span>ome</p></Link>
                <Link to="badportfolio/about" onMouseOver={this.makeCircleVanish} onMouseOut={this.makeCircleAppear}><p><span>A</span>bout</p></Link>
                <Link to="badportfolio/projects" onMouseOver={this.makeCircleVanish} onMouseOut={this.makeCircleAppear}><p><span>P</span>rojects</p></Link>
                <Link to="badportfolio/contact" onMouseOver={this.makeCircleVanish} onMouseOut={this.makeCircleAppear}><p><span>C</span>ontact</p></Link>
              </div>
              <ul onClick={this.hamToggle} className={this.state.isHamActive ? "active" : ""} onMouseOver={this.makeCircleBigger} onMouseOut={this.makeCircleSmall}>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <Switch>
              <Route exact path="badportfolio/"><Home /></Route>
              <Route path="badportfolio/about"><About /></Route>
              <Route path="badportfolio/projects"><Projects /></Route>
              <Route path="badportfolio/contact"><Contact /></Route>
            </Switch>
          </Router>
        </div>
      );
    }
  }
}