import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';

function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <Card>
        <CardImg
          height={200}
          title={props.product.name}
          src={props.product.img}
          alt={props.product.name}
        />
        <CardBody>
          <CardTitle>
            <h3>{props.product.name}</h3>
          </CardTitle>
          <CardText> {props.product.description}</CardText>
          <CardSubtitle>${props.product.price}</CardSubtitle>
          {props.currentUser.username ? (
            <div>
              <br />
              <Button
                color="primary"
                onClick={() => props.addToCart(props.product)}>
                Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0})
              </Button>

              {/* {props.cartItem ? (
                <div>
                  <Button
                    color="primary"
                    onClick={() => props.removeFromCart(props.cartItem)}>
                    Remove From Cart
                  </Button>
                </div>
              ) : null} */}
            </div>
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    currentUser: state.loggedin.currentUser
  };
}

export default connect(mapStatetoProps)(ProductListItem);
