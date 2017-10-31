import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types'

const Jumbo = (props) => {
    
  return (
    <div className="hero">
      <Jumbotron>
        
        <div className="row" >
        <div className="col-md-5 px-md-5 pt-md-5"><br /><br />
        <h1 className="display-4">Explore Your Mind's Eye</h1><br />
        <h3 className="lead">Transmute images into unique creations via algorithm and human input. CreARTivity is a next generation interface leveraging simplisitic design and human creativity</h3>
        <hr className="my-2" />
        <p>Ready. Set. creARTivity!</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
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


export default Jumbo;

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string
  };
