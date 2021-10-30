import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    componentDidMount = () => {
        window.distort()
    }
    render() {
        return (
            <div className="home">
                <div className="left"></div>
                <div className="center">

                </div>
                <div className="right">

                </div>
            </div>
        )
    }
}
