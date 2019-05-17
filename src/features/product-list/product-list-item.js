import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img
        height={200}
        title={props.product.name}
        src={props.product.image}
        alt={props.product.name}
      />
      <div> {props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <button onClick={() => props.addToCart(props.product)}>
          Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0})
        </button>
      </div>
      {props.cartItem ? (
        <div>
          <button onClick={() => props.removeFromCart(props.cartItem)}>
            Remove From Cart
          </button>
        </div>
      ) : null}
    </div>
  );
}
