import React from 'react';
import { connect } from 'react-redux';

function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img
        height={200}
        title={props.product.name}
        src={props.product.img}
        alt={props.product.name}
      />
      <div> {props.product.description}</div>
      <div>${props.product.price}</div>
      {props.currentUser.username ? (
        <div>
          <button onClick={() => props.addToCart(props.product)}>
            Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0})
          </button>

          {props.cartItem ? (
            <div>
              <button onClick={() => props.removeFromCart(props.cartItem)}>
                Remove From Cart
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    currentUser: state.loggedin.currentUser
  };
}

export default connect(mapStatetoProps)(ProductListItem);
