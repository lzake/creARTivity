import React, { Component } from 'react';
import {
  Button,
  Card, CardImg, CardText, CardBody,
  CardColumns,
  CardDeck,
  CardFooter,
  CardGroup,
  CardHeader,
  CardTitle, CardSubtitle,
  CardImgOverlay,
  CardLink
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



class PreviewCompleted extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="row  my-3">
            <Card className="col-s-11 col-md-10 mx-auto">
                <CardTitle>
                    <div className="float-left ml-4 my-2">Your creARTtion!</div>
                </CardTitle>
                <CardImg top width="100%" height="55%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody className="col-12">
                    <div className="row ">
                        <div className= "col-s-12 col-m-3 mx-auto mt-1 ">
                              <Link  to="/select"><Button color="primary btn-lg active "><i className=" fa fa-arrow-left fa-lg text-white" aria-hidden="true"></i>Go Back</Button></Link>
                        </div>
                        <div className= "col-s-12 col-m-3 mx-auto mt-1">

                              <Button color="primary btn-lg active ">Download<i className="fa fa-floppy-o fa-lg text-white" aria-hidden="true"></i></Button>

                          </div>
                        <div className= "col-s-12 col-m-3 mx-auto mt-1">
                            <Link to="/gallery">
                              <Button color="primary btn-lg active ">Save<i className="fa fa-cloud-upload fa-lg text-white" aria-hidden="true"></i></Button>
                            </Link>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
  }
}


Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  className: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}

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

CardColumns.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardDeck.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardFooter.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardGroup.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardHeader.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

CardImgOverlay.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardLink.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

export default PreviewCompleted;
