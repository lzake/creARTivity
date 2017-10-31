import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './modal.css';
import Navbar from './navBar';
import Jumbo from './jumbotron';
import Footer from './footer';
import ModalSignLogin from './modal';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbo />

        <Footer />
      </div>
    );
  }
}

export default App;
