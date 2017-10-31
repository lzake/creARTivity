import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar'
import Jumbo from './Jumbotron'


class App extends Component {
  render() {
    return (
      <div className="App ">
        
        <Navbar />
        <Jumbo />
        
      </div>
    );
  }
}

export default App;