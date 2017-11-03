import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
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


const items = [
  {
    src: 'https://s3-us-west-2.amazonaws.com/q3pics/jp1.jpg',
    altText: 'Jackson Pollock 1',
    caption: 'Jackson Pollock 1'
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/q3pics/jp2.jpg',
    altText: 'Jackson Pollock 2',
    caption: 'Jackson Pollock 2'
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/q3pics/jp3.jpg',
    altText: 'Jackson Pollock 3',
    caption: 'Jackson Pollock 3'
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/q3pics/jp4.jpg',
      altText: 'Jackson Pollock 4',
      caption: 'Jackson Pollock 4'
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/q3pics/jp5.jpg',
      altText: 'Jackson Pollock 5',
      caption: 'Jackson Pollock 5'
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/q3pics/jp6.jpg',
      altText: 'Jackson Pollock 6',
      caption: 'Jackson Pollock 6'
    }
];

class Selectsplice extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeIndex: 0,
        selectedArt : items[0] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.selectedArt = this.selectedArt.bind(this);
  }



  selectedArt (selectedArt) {
      console.log('selected art method', selectedArt);
      this.setState({
          selectedArt
      })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem

          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
        >

          <CarouselCaption  className="text-dark"captionHeader={item.caption} />
              <span className="click-mask"onClick={()=>this.selectedArt(item)}>
              </span>
        </CarouselItem>

      );
    });

    return (
        <div className="row  my-3">
            <Card className="col-s-11 col-md-10 mx-auto">

                <div className="row">

                    <div className=" col-md-6 ">
                        <CardTitle>
                            <div className="float-left ml-4 my-2">Art Gallery</div>
                        </CardTitle>
                      <Carousel className="h-75"
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                      >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                      </Carousel>
                  <CardBody className="float-left ml-2">
                    <Link to="/select" ><Button color="primary btn-lg active"><i className="fa fa-refresh fa-lg text-white" aria-hidden="true"></i>Start Over</Button></Link>{' '}
                  </CardBody>
              </div>
                    <div className="col-md-6 ">
                        <CardTitle>
                            <div className="float-left ml-4 my-2">Spliced Art</div>
                        </CardTitle>
                        <CardImg top width="100%" height="72%" src={this.state.selectedArt.src} />
                        <CardBody className="float-left ml-2">
                          <Link to="/draw"><Button color="primary btn-lg active">creART<i className="fa fa-arrow-right fa-lg text-white" aria-hidden="true"></i></Button></Link>
                        </CardBody>
                    </div>
                </div>
            </Card>
        </div>
    );
  }
}

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', true]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
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

export default Selectsplice;