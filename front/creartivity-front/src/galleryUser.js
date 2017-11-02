import React from 'react';
import { Media,
    Button,
    Card, CardImg, CardText, CardBody,
    CardColumns,
    CardHeader,
CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GalleryUser = () => {
  return (
      <Card className="col-s-11 col-md-10 mx-auto my-3" >
        <CardTitle >
            <div className="float-left ml-4 my-2">Gallery
            </div>
        </CardTitle>
        <Media className="row">
            <div className="col-s-12 col-md-6">
              <Media left href="#" className="m-1 row">
                <div className="col-s-6 col-md-3 m-1">
                <div className="row">
                <img src="http://via.placeholder.com/100x100"/>
                </div>
                <div className="row mt-1">
                <i className=" fa fa-eye fa-lg text-black" aria-hidden="true"></i>
                <i className=" fa fa-trash-o fa-lg text-black" aria-hidden="true"></i>
                </div>
                </div>

                <div className="col-s-6 col-md-3 m-1">
                <div className="row">
                <img src="http://via.placeholder.com/100x100"/>
                </div>
                <div className="row mt-1">
                <i className=" fa fa-eye fa-lg text-black" aria-hidden="true"></i>
                <i className=" fa fa-trash-o fa-lg text-black" aria-hidden="true"></i>
                </div>
                </div>

                <div className="col-s-6 col-md-3 m-1">
                <div className="row">
                <img src="http://via.placeholder.com/100x100"/>
                </div>
                <div className="row mt-1">
                <i className=" fa fa-eye fa-lg text-black" aria-hidden="true"></i>
                <i className=" fa fa-trash-o fa-lg text-black" aria-hidden="true"></i>
                </div>
                </div>
                <div className="col-s-6 col-md-3 m-1">
                <div className="row">
                <img src="http://via.placeholder.com/100x100"/>
                </div>
                <div className="row mt-1">
                <i className=" fa fa-eye fa-lg text-black" aria-hidden="true"></i>
                <i className=" fa fa-trash-o fa-lg text-black" aria-hidden="true"></i>
                </div>
                </div>
              </Media>



            </div>
              <div className="col-s-12 col-md-6">
              <Media body className="">
                <Media heading>
                  Reggie Jackson
                </Media>
                Select. View or Delete Your Art.
              </Media>
              </div>
        </Media>
    </Card>
  );
};

Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
};

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};


CardHeader.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};


CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};


export default GalleryUser;
