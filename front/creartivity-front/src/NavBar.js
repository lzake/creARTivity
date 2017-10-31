import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import PropTypes from 'prop-types';
import './modal.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isOpen: false,
      modal: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
}
    toggleModal() {
      this.setState({
        modal: !this.state.modal
      });
    }
  render() {
    return (
      <div className="container px-md-5 ">
        <Navbar className="fixed-top" color="faded" light expand="md">
          <NavbarBrand href="/">creARTivity</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="https://www.linkedin.com/in/zachariahlowe">Create</NavLink>
              </NavItem>

              <NavItem>
              <NavLink onClick={this.toggleModal} href="#" > Sign Up/In
              <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>

                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <div className="flip">
                                <div className="card">
                                  <div className="face front">
                                    <div className="panel panel-default">
                                      <form className="form-horizontal">

                                        <br />

                                        <h1 className="text-center">creARTivity</h1>

                                        <br />

                                        <input className="form-control" placeholder="Username"/>
                                        <input className="form-control" placeholder="Password"/>
                                        <button className="btn btn-primary btn-block" toggle={this.toggleModal}>LOG IN</button>
                                        <hr />
                                        <p className="text-center">
                                          <a href="#" className="fliper-btn" >Create new account?</a>
                                        </p>
                                      </form>
                                    </div>
                                  </div>
                                  <div className="face back">
                                      <div className="panel panel-default">
                                          <form className="form-horizontal">
                                            <br />
                                            <h1 className="text-center">creARTivity</h1>
                                            <br />
                                            <label>Basic Information</label>
                                            <input className="form-control" placeholder="Fullname"/>
                                            <input className="form-control" placeholder="Email"/>
                                            <label>Private Information</label>
                                            <input className="form-control" placeholder="Password"/>
                                            <input className="form-control" placeholder="Mobile Number"/>
                                            <button className="btn btn-primary btn-block modal" toggle={this.toggleModal}>SIGN UP</button>
                                            <p className="text-center">
                                              <a href="#" className="fliper-btn">Already have an account?</a>
                                            </p>
                                          </form>
                                      </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </ModalBody>

              </Modal></NavLink>
            </NavItem>

            <NavItem>
            <NavLink href="https://www.linkedin.com/in/zachariahlowe">Contact</NavLink>

          </NavItem>
            </Nav>
          </Collapse>
        </Navbar>


      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

// class ModalSignLogin
//  extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };
//
//     this.toggle = this.toggle.bind(this);
//   }
//
//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <Button color="danger"> </Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

Modal.propTypes = {
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // backdropTransition - controls backdrop transition
  // timeout is 150ms by default to match bootstrap
  // see Fade for more details
  backdropTransition: PropTypes.shape(Fade.propTypes),
  // modalTransition - controls modal transition
  // timeout is 300ms by default to match bootstrap
  // see Fade for more details
  modalTransition: PropTypes.shape(Fade.propTypes),
}
