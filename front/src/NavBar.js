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
      cardStyle: 'card'
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

    flipper1 = (e) => {
      e.preventDefault();
      this.setState({cardStyle: 'card flipped'})
    }

    flipper2 = (e) => {
      e.preventDefault();
      this.setState({cardStyle: 'card'})
    }



  render() {
    return (
      <div className="container px-md-5 ">
      <style>
      @import url('https://fonts.googleapis.com/css?family=Lobster');
      </style>

        <Navbar className="fixed-top" color="faded" light expand="md">
          <NavbarBrand href="/" className="whiteoutline">cre<span className="createorlog3">ART</span>ivity</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink onClick={this.toggleModal} href="#" className="whiteoutline">Sign Up/In
              <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>

                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <div className="flip">
                                <div className={this.state.cardStyle}>
                                  <div className="face front">
                                    <div className="panel panel-default">
                                      <form className="form-horizontal">

                                        <br />

                                        <h1 className="text-center">cre<span className="createorlog1">ART</span>ivity</h1>
                                        <br />
                                        <br />

                                        <input className="form-control" placeholder="Email" type="email" minlength="6" maxlength="20" required/>
                                        <input className="form-control" placeholder="Password"type="password" minlength="6" maxlength="20" required/>
                                        <button className="btn btn-primary btn-block" type="submit">LOG IN</button>
                                        <br /><br /><br /><br /><br /><br /><br />
                                        <p className="text-center">
                                          <a href="#" className="fliper-btn createorlog"  onClick={this.flipper1.bind(this)}>Create new account?</a>
                                        </p>
                                      </form>
                                    </div>
                                  </div>
                                  <div className="face back">
                                      <div className="panel panel-default">
                                          <form className="form-horizontal" data-toggle="validator" role="form">
                                            <br />
                                            <h1 className="text-center">cre<span className="createorlog1">ART</span>ivity</h1>
                                            <br />
                                            <label>Basic Information</label>
                                            <input className="form-control" placeholder="Full name" minlength="6" maxlength="20" type="text" required/>
                                            <input className="form-control" placeholder="Email"type="email"  minlength="6" maxlength="20" required/>
                                            <label>Private Information</label>
                                            <input type="password" className="form-control" placeholder="Password (min 6 characters)" minlength="6" maxlength="20" id="inputPassword" required/>
                                            <input type="password" className="form-control" minlength="6" maxlength="20" placeholder="Confirm Password" data-match="#inputPassword" data-match-error="Whoops, these don't match" required/>
                                            <button className="btn btn-primary btn-block" type="submit">SIGN UP</button><br />
                                            <p className="text-center">
                                              <a href="#" className="fliper-btn createorlog" onClick={this.flipper2.bind(this)}>Already have an account?</a>
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
            <NavLink href="https://www.linkedin.com/in/zachariahlowe" className="whiteoutline">Contact</NavLink>

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
