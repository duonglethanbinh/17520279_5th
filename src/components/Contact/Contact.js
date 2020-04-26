import React, { Component } from 'react';
import './Contact.css';
import Form from '../../img/icons/form.png'
class Contact extends Component {
    render() {
        return (
            <div className="contact_content" id="contact">
                <h3>Contact me</h3>
                <img src={Form} alt="Form" />
                <form id="contact-form">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" name="firstname" placeholder="Your full name.." />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="lastname" placeholder="Your email.." />
                    <label htmlFor="subject">Your Message</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." rows="5" ></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Contact; 