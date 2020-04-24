import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RouterURL from '../components/RouterURL/RouterURL';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <RouterURL></RouterURL>
        <Footer />
      </Fragment>
    )
  }
}

export default App;
