import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileFetch, logoutUser } from './config/actions';
import Router from './Router';

const Navigation = props => (
  <nav>
    <ul className="top-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {props.currentUser.username ? (
          <NavLink to="/cart">
            Cart (
            {props.cart.reduce((acc, item) => {
              return acc + item.quantity;
            }, 0)}
            )
          </NavLink>
        ) : (
          <NavLink to="/login">Log In or Sign Up</NavLink>
        )}
      </li>
    </ul>
  </nav>
);

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
    return a && b && c;
  };

  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />
        {this.props.currentUser.username ? (
          <button onClick={this.handleClick}>Log Out</button>
        ) : null}
        <Router />
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
