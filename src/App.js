import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  hamToggle = (e) => {
    e.target.style.background = "red"
  }
  render() {
    return (
      <div className="App" >
        <div className="header">
          <div className="logo">
            <img src="https://github.com/AaryanShaikh/badportfolio/blob/main/src/res/logo.png?raw=true" alt="" />
          </div>
          <div className="nav">
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
          <div className="ham" onClick={this.hamToggle}></div>
        </div>
      </div>
    );
  }
}