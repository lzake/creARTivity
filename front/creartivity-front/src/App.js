import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './modal.css';
import Navbar from './NavBar';
import Jumbo from './Jumbotron';
import Footer from './footer';
import Canvas from './Canvas';
import ModalSignLogin from './modal';
import Selectsplice from './selectSplice';
import PreviewCompleted from './previewCompleted';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        showPanel:'hidden',
        showJumbo: true,
        showSelect: false,
        showSplice: false,
        showCanvas: false,
        showPreview: false,
        showGallery: false}
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
        <Selectsplice />
        <PreviewCompleted />
        <Canvas className="hidden"/>
        <Footer />
      </div>
    );
  }
}

export default App;
