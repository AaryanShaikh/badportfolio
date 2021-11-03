import React, { Component } from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            sentText: "Send"
        }
    }
    sentAnimation = (e) => {
        this.clearText()
        this.setState({
            sentText: ""
        })
        e.target.classList.add("sent")
        e.target.style.height = "2vh"
        setTimeout(() => {
            e.target.style.height = "7vh"
            this.setState({
                sentText: "Send"
            })
        }, 5000)

    }
    clearText = () => {
        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phno").value = ""
        document.getElementById("msg").value = ""
    }
    makeCircleInvert = () => {
        document.getElementById("mouse-circle").style.backdropFilter = "invert(1)"
        document.getElementById("mouse-circle").style.height = "220px"
        document.getElementById("mouse-circle").style.width = "220px"
        document.getElementById("mouse-circle").style.margin = "-70px 0px 0px -70px"
    }
    remCircleInvert = () => {
        document.getElementById("mouse-circle").style.backdropFilter = "invert(0)"
        document.getElementById("mouse-circle").style.height = "30px"
        document.getElementById("mouse-circle").style.width = "30px"
        document.getElementById("mouse-circle").style.margin = "-20px 0px 0px -20px"
    }
    formSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_s2e5s9s', 'template_kg67rx7', e.target, 'user_7diN9GjEZcKUAss11a2iN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        this.sentAnimation()
    }
    render() {
        return (
            <div className="contact">
                <div className="top">
                    <h1>I'd <span>love</span> to hear from you!</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="/contact4.gif" alt="" onMouseOver={this.makeCircleInvert} onMouseOut={this.remCircleInvert} />
                    </div>
                    <div className="right">
                        <form onSubmit={this.formSubmit}>
                            <div className="grid">
                                <input type="text" name="fname" placeholder="First Name" />
                                <input type="text" name="lname" placeholder="Last Name" />
                                <input type="text" name="email" placeholder="Email" />
                                <input type="text" name="phno" placeholder="Phone Number" />
                            </div>
                            <textarea name="msg" placeholder="Pour your thoughts here..." ></textarea>
                            <button type="submit"><span>{this.state.sentText}</span></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
