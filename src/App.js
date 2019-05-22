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
  Button
} from 'reactstrap';

class App extends Component {
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
      <Navbar color="light" light expand="md">
      <NavbarBrand>
        <NavLink to="/">Shopping Site</NavLink>
      </NavbarBrand>
  
      <Nav className="ml-auto" navbar>
        <NavItem>
          {this.props.currentUser.username ? (
            <NavLink to="/cart">
              Cart (
              {this.props.cart.reduce((acc, item) => {
                return acc + item.quantity;
              }, 0)}
              )
            </NavLink>
          ) : (
            <NavLink to="/login">Log In or Sign Up</NavLink>
          )}
        </NavItem>
        <NavItem>
        {this.props.currentUser.username ? (
          <Button color="primary" onClick={this.handleClick}>
            Log Out
          </Button>
        ) : null}
        </NavItem>
      </Nav>
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
