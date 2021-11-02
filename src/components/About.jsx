import React, { Component } from 'react'
import './About.css';

export default class About extends Component {
    componentDidMount = () => {
        window.mouseFollow()
    }
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
        )
    }
}
