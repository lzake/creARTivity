import React from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';

const Canvas = (props) => {

  return (
    <div className="canvasDiv">

      <canvas className="canvas" width={500} height={500}></canvas>


        <div className="button">
          <Button  color="primary" size="lg"><i className="fa fa-step-backward text-white"></i>  Go Back</Button>{' '}
          <Button  color="primary"  size="lg">  Cre<span className="createorlog5">ART    </span>    <i className="fa fa-step-forward text-white"></i></Button>{' '}
        </div>

    </div>

  );
};

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

export default Canvas;
