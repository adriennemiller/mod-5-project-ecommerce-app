import React from 'react';
import { connect } from 'react-redux';

// sort so they don't jump around
function sort(items) {
  return items.sort(function(a, b) {
    return a.id - b.id;
  });
}

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={e => props.addToCart(item)}>+</button>
              <button onClick={e => props.removeFromCart(item)}>-</button>
            </td>
            <td>
              <button onClick={e => props.removeAllFromCart(item)}>
                Remove All From Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE', payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: 'REMOVE_ALL', payload: item });
    }
  };
}
// returns another function which is then called with cart passed into it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
