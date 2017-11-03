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
import GalleryUser from './galleryUser';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        showPanel:'hidden',
        selectedArt:null,
        createdArt:null,
    } }


  render() {
    return (
      <div className="App">
        <Navbar />
            <Router>
                <div>
                <PropsRoute exact path="/" component={Jumbo}/>
                <PropsRoute exact path="/select" component={Selectsplice} />
                <PropsRoute exact path="/draw" component={Canvas} />
                <PropsRoute exact path="/preview" component={PreviewCompleted} />
                <PropsRoute exact path="/gallery" component={GalleryUser} />
                </div>
            </Router>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
    // Pass in a Component to override default element

    onChange: PropTypes.func
  };

export default App;
