import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Welcome from '../Welcome/Welcome';
// import Hanoi from '../Reviews/Places/Hanoi';
// import Hochiminh from '../Reviews/Places/Hochiminh';
// import Hue from '../Reviews/Places/Hue';
// import Danang from '../Reviews/Places/Danang';
import NotFound from '../NotFound/NotFound';
import Detail from '../Reviews/Detail';
class RouterURL extends Component {
    render() {
        return (
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
                <Route exact path="/detail/:id/:slug.html" component={Detail} />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        );
    }
}
export default RouterURL;