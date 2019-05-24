import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileFetch, logoutUser } from './config/actions';
import Router from './Router';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button, 
  NavbarToggler, 
  Collapse
} from 'reactstrap';
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount = () => {
    this.props.getProfileFetch();
  };

  handleClick = event => {
    event.preventDefault();
    // Remove the token from localStorage
    let a = localStorage.removeItem('token');
    // Remove the user object from the Redux store
    let b = this.props.logoutUser();
    console.log(this.props.history);
    let c = this.props.history.push('/login');
    window.location.reload();
    return a && b && c;
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" sticky="top">
          <NavbarBrand>
            <NavLink to="/">
              <img src={logo} alt="logo" height="60" />
            </NavLink>
          </NavbarBrand>
           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-spacing">
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem className="nav-spacing">
              {this.props.currentUser.username ? (
                <NavLink to="/cart">
                  Cart (
                  {this.props.cart.reduce((acc, item) => {
                    return acc + item.quantity;
                  }, 0)}
                  )
                </NavLink>
              ) : (
                <NavLink to="/login">Sign In / Register</NavLink>
              )}
            </NavItem>
            {this.props.currentUser.username ? (
              <NavItem className="nav-spacing">
                Welcome, {this.props.currentUser.username}
              </NavItem>
            ) : null}
            <NavItem className="nav-spacing">
              {this.props.currentUser.username ? (
                <Button outline color="primary" onClick={this.handleClick}>
                  Log Out
                </Button>
              ) : null}
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        <Container>
          <Router />
        </Container>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    cart: state.cart,
    currentUser: state.loggedin.currentUser
  };
}
const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withRouter(App));
