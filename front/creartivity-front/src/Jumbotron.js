import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types'

const Jumbo = (props) => {

  return (
<div >
      <Jumbotron className="jumbo mb-0 rounded-0">

        <div className="row" >
        <div className="col-md-5 px-md-5 "><br /><br />
        <h4 className="display-8">Explore Your Mind&#39;s Eye</h4><br />
        <h6 className="lead">Transmute images into unique creations via algorithm and human input.</h6>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
          <Button color="btn btn-danger">Ready. Set. creARTivity!</Button>
        </p>
        </div>
        <div className="col-md-7">
        <img src="https://s3-us-west-2.amazonaws.com/q3pics/hero.jpg" className="img-fluid" alt="Jackson Pollock Art"></img>
        </div>
        </div>

      </Jumbotron>
</div>
  );
};




Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string
  };

export default Jumbo;
