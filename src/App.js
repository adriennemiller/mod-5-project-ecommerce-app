import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileFetch, logoutUser } from './config/actions';

import Router from './Router';

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
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
    localStorage.removeItem('token');
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <Navigation />
        <Router />
        <div>
          {this.props.currentUser.username ? (
            <button onClick={this.handleClick}>Log Out</button>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
});

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
