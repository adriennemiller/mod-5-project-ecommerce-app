import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Router from './Router';

const Navigation = props => (
  <nav>
    <ul className="top-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          Cart (
          {props.cart.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
          )
        </NavLink>
      </li>
      <li>
        <NavLink to="/checkout">Checkout</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />

        <Router />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStatetoProps)(App);
