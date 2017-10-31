import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Jumbo from './Jumbotron';
import Footer from './footer';



class App extends Component {
  render() {
    return (
      <div className="App ">

        <Navbar />
        <Jumbo />
        <Footer />

      </div>
    );
  }
}

export default App;
