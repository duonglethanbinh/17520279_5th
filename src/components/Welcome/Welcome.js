import React, { Component } from 'react';
import './Welcome.css'
class Welcome extends Component {
    render() {
        return (
            <div className="jumbotron welcome_content ">
                <div className="container">
                    <h1 className="display-5 ">Welcome to<strong>Travellog</strong></h1>
                    <p>This website will provide you various experiences and feedback about famous locations or wonderful city which travelers or reviewers recommended. Let's consider your final decision based on our recommendations.<br />Have a
                nice day &#9749;&#9749;&#9749;</p>
                </div>
            </div>
        )
    }
}

export default Welcome;