import React from 'react';

import fetchApi from '../../modules/fetch-api';

class Order extends React.Component {
  state = {
    order: null
  };
  // componenetDidMount() {
  //     fetchApi("get", url for orders/{this.props.id})
  // }

  renderOrder() {
    return (
      <div>
        <h3>Order Info</h3>
        {/* <div>Order: {this.state.order}</div>  */}
      </div>
    );
  }
  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : 'Loading...'}</div>;
  }
}

export default Order;
