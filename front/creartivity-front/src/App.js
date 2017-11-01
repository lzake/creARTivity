import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './modal.css';
import Navbar from './NavBar';
import Jumbo from './Jumbotron';
import Footer from './footer';
import Canvas from './Canvas';
import ModalSignLogin from './modal';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {showPanel:'hidden'}
  }

  toggle = () => {
    this.setState({
      showPanel: !this.state.showPanel
    });
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbo />
        <Canvas className="hidden"/>
        <Footer />
      </div>
    );
  }
}

export default App;
