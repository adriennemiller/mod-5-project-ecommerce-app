import React from 'react';

import fetchApi from '../../modules/fetch-api';

class Order extends React.Component {
  state = {
    order: null
  };

  componentDidMount() {
    fetchApi('get', `http://localhost:4000/orders/`).then(json => {
      this.setState({
        order: json
      });
    });
  }

  renderOrder() {
    return (
      <div>
        <h3>Hooray, your order was successful!</h3>
      </div>
    );
  }
  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : 'Loading...'}</div>;
  }
}

export default Order;
