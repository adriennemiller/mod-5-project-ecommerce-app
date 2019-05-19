import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart';
import CheckoutForm from './form';
import fetchApi from '../../modules/fetch-api';

function submitOrder(cart) {
  // fetchApi( 'post', urlpostto)
  alert('you placed an order');
}

function Checkout(props) {
  const { cart } = props;

  return (
    <div>
      <div style={{ border: '1px solid black' }}>
        <Cart />
      </div>

      <CheckoutForm onSubmit={values => submitOrder(cart, values)} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

// connect this component to redux store
export default connect(mapStateToProps)(Checkout);
