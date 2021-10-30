import React, { Component } from 'react'
import './App.css';
import Home from './components/Home';

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
        <div className="header">
          <div className="logo">
            <img src="https://github.com/AaryanShaikh/badportfolio/blob/main/src/res/logo.png?raw=true" alt="" />
          </div>
          <div className="nav">
            <p><span>H</span>ome</p>
            <p><span>A</span>bout</p>
            <p><span>P</span>rojects</p>
            <p><span>C</span>ontact</p>
          </div>
          <ul onClick={this.hamToggle} className={this.state.isHamActive ? "active" : ""}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Home />
      </div>
    );
  }
}