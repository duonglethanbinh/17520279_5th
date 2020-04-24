import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Welcome from '../Welcome/Welcome';
import Hanoi from '../Reviews/Places/Hanoi';
import Hochiminh from '../Reviews/Places/Hochiminh';
import Hue from '../Reviews/Places/Hue';
import Danang from '../Reviews/Places/Danang';
import NotFound from '../NotFound/NotFound';
class RouterURL extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/aboutme">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/reviews">
                        <Reviews />
                    </Route>
                    <Route path="/HaNoi">
                        <Hanoi />
                    </Route>
                    <Route path="/HoChiMinh">
                        <Hochiminh />
                    </Route>
                    <Route path="/Hue">
                        <Hue />
                    </Route>
                    <Route path="/DaNang">
                        <Danang />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default RouterURL;