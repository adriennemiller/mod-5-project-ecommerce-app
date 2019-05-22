import React from 'react';
import Cart from '../features/cart';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function CartPage(props) {
  return (
    <div>
      <h2>Cart</h2>
      <Cart />
      <Link to="/checkout">
        <Button color="primary">Checkout</Button>
      </Link>
    </div>
  );
}
