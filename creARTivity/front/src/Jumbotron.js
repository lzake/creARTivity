import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Jumbo extends React.Component {

constructor(props) {
    super(props);

}


render (){
  return (
<div >
      <Jumbotron className="jumbo mb-0 rounded-0">
      <style>
      @import url('https://fonts.googleapis.com/css?family=Abril+Fatface');
      </style>
        <div className="row" >
        <div className="col-s-12 col-md-5 px-md-6 "><br /><br />
        <h4 className="display-8 text-white frontlog">Explore Your Mind&#39;s Eye</h4><br />
        <h6 className="lead text-white frontlog">Transmute images into unique creations via algorithm and human input.</h6>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
          <Link to="/select" className="btn btn-danger">Ready. Set. cre<span className="createorlog2">ART</span>ivity</Link>
        </p>
        </div>
        <div className="col-s-12 col-md-7 rounded">
        <img src="https://s3-us-west-2.amazonaws.com/q3pics/hero.jpg" className="img-fluid rounded" alt="Jackson Pollock Art"></img>
        </div>
        </div>

      </Jumbotron>
</div>
  );
};

}


Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string

}
