/* global prepareSquares, creArtivity, saveCanvasImage */
import React from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import fabric from 'fabric';
import CreateArtwork from './CreateArtwork';
import { Link } from 'react-router-dom';

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

    <div className="row  d-flex justify-content-around" >

          <div className=" col-sm-11 col-md-5 my-2 ">

            <div className="button my-2">
              <Button className="float-left  "id="CutImageUp" type="button" name="button"  onClick={this.click1.bind(this)}><i class="fa fa-scissors text-white" aria-hidden="true"></i>Cut Squares</Button>
              <Button className="mx-auto" id="GenerateArtwork" type="button" name="button" onClick={this.click2.bind(this)}>creART!</Button>
              <Button className="float-right" id="SaveImage" type="button" name="button" onClick={this.click3.bind(this)}>Save Image<i class="fa fa-floppy-o text-white" aria-hidden="true"></i></Button>
              </div>
              <div className="d-flex justify-content-around" id="canvasHugger">
              <canvas ref="canvas" className="canvas align-middle"></canvas>
              </div>


            <div className="button my-2">
                <Link to="/select">
                  <Button className="float-left" color="primary" size="lg"><i className="fa fa-arrow-left text-white"></i>  Go Back</Button>
                </Link>
                <Link to="/preview">
                  <Button className="float-right" color="primary"  size="lg">  Cre<span className="createorlog5">ART    </span>    <i className="fa fa-arrow-right text-white"></i></Button>
                  </Link>
            </div>

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
