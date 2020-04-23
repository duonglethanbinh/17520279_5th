import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg">
                    <a className="navbar-brand" href="/#">TRAVELLOG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarsExampleDefault" style={{}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a className="nav-link" href="#reviews">Reviews</a>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a className="nav-link" href="#aboutme">About me</a>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;