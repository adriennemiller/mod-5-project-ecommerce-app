import React from 'react';
import Cart from '../features/cart';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import sadBaby from '../crying baby.svg';

class CartPage extends React.Component {
  render() {
    return (
      <Container>
        {console.log(this.props.cart)}
        {this.props.cart.length === 0 ? (
          <Container>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h2 className="center-text">Your cart is empty!</h2>
                <img src={sadBaby} alt="sad baby" className="baby-pic" />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Link to="/">
                  <Button className="black-button center-button">
                    Continue Shopping
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="lower-content-50">
            <h2>Cart</h2>
            <Cart />
          </div>
        )}
        {this.props.cart.length === 0 ? null : (
          <div>
            <Link to="/">
              <Button className="white-button top-spacing">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/checkout">
              <Button className="black-button right-button">Checkout</Button>
            </Link>
          </div>
        )}
      </Container>
    );
  }
}

function mapStatetoProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStatetoProps)(CartPage);
