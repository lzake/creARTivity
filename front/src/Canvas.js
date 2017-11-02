/* global prepareSquares, creArtivity, saveCanvasImage */
import React from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import fabric from 'fabric';
import CreateArtwork from './CreateArtwork'

export default class Canvas extends React.Component {

  componentDidMount(){
    CreateArtwork.init(this.refs.canvas)
  }

  click1 = (e) => {
    e.preventDefault();
    CreateArtwork.prepareSquares()
    console.log("clicking")
  }
  click2 = (e) => {
    e.preventDefault();
    CreateArtwork.creArtivity()
    console.log("clicking")
  }
  click3 = (e) => {
    e.preventDefault();
    CreateArtwork.saveCanvasImage()
    console.log("clicking")
  }

  render() { 
  return (
 
    <div>
      <Button id="CutImageUp" type="button" name="button" onClick={this.click1.bind(this)}>Cut Image Into Squares</Button>
      <Button id="GenerateArtwork" type="button" name="button" onClick={this.click2.bind(this)}>Generate Artwork</Button>
      <Button id="SaveImage" type="button" name="button" onClick={this.click3.bind(this)}>Save Image</Button>
      
      <br />
      <canvas ref="canvas" className="canvas align-middle" width={300} height={300}></canvas>
      <br />

        <div className="button">
          <Button  color="primary" size="lg"><i className="fa fa-step-backward text-white"></i>  Go Back</Button>{' '}
          <Button  color="primary"  size="lg">  Cre<span className="createorlog5">ART    </span>    <i className="fa fa-step-forward text-white"></i></Button>{' '}
        </div>

    </div>

  );
};
}


Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}

