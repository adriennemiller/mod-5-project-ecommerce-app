import React from 'react';
import Cart from '../features/cart';
import { Link } from 'react-router-dom';

export default function CartPage(props) {
  return (
    <div>
      <h2>Cart</h2>
      <Cart />
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
