import React from 'react';

import fetchApi from '../../modules/fetch-api';

class Order extends React.Component {
  state = {
    order: null
  };

  componentDidMount() {
    fetchApi('get', `http://localhost:4000/orders/${this.props.id}`).then(
      json => {
        this.setState({
          order: json
        });
      }
    );
  }

  renderOrder() {
    const { order_items } = this.state.order;

    return (
      <div>
        <h3>Order Info</h3>
        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                product,
                quantity,
                product: { name, image, price }
              } = item;
              return (
                <li>
                  <img src={image} width={32} alt={name} />
                  {name}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : 'Loading...'}</div>;
  }
}

export default Order;
