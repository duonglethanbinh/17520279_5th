import React, { Component, Fragment } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">
                        Posted by: <a href="mailto:17520279@gm.uit.edu.vn">
                            Dương Lê Thanh Bình</a>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default Footer;