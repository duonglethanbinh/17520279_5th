import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Welcome />
          <Reviews />
          <About />
          <Contact />
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default App;
