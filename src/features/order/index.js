import React from 'react';

import fetchApi from '../../modules/fetch-api';
import scooterImg from '../../23.svg';

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
    const { order } = this.state;
    console.log(order);
    return (
      <div>
        <h3 className="text-center">Hooray, your order is on its way!</h3>
        <img src={scooterImg} alt="man on scooter" className="scooter-img" />
      </div>
    );
  }
  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : 'Loading...'}</div>;
  }
}

export default Order;
