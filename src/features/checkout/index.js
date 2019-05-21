import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart';
import CheckoutForm from './form';
import fetchApi from '../../modules/fetch-api';

function submitOrder(item, currentUser) {
  fetchApi('POST', 'http://localhost:4000/orders', {
    product_id: item.id,
    quantity: item.quantity,
    user_id: currentUser.id
  }).then(json => {
    if (json.errors) {
      alert('something is wrong');
      return;
    }
    console.log(json);
  });
  alert('you placed an order');
}

function mapOrders(cart, currentUser) {
  cart.map(item => {
    submitOrder(item, currentUser);
  });
}

function Checkout(props) {
  return (
    <div>
      <div style={{ border: '1px solid black' }}>
        <Cart />
      </div>

      <CheckoutForm
        onSubmit={currentUser => mapOrders(props.cart, props.currentUser)}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    currentUser: state.loggedin.currentUser
  };
}

// connect this component to redux store
export default connect(mapStateToProps)(Checkout);
