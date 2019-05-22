import React from 'react';
import Cart from '../features/cart';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Cart</h2>
        {console.log(this.props.cart)}
        {this.props.cart.length === 0 ? <p>Your cart is empty!</p> : <Cart />}
        {this.props.cart.length === 0 ? null : (
          <Link to="/checkout">
            <Button color="primary">Checkout</Button>
          </Link>
        )}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStatetoProps)(CartPage);
