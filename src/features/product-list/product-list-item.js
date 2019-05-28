import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            {this.props.product.name} - ${this.props.product.price}
            <br />
            <img
              height={200}
              title={this.props.product.name}
              src={this.props.product.img}
              alt={this.props.product.name}
            />
          </ModalHeader>
          <ModalBody>{this.props.product.description}</ModalBody>
          <ModalFooter>
            {this.props.currentUser.username ? (
              <Button
                color="primary"
                onClick={() => this.props.addToCart(this.props.product)}>
                Add to Cart (
                {(this.props.cartItem && this.props.cartItem.quantity) || 0})
              </Button>
            ) : null}
          </ModalFooter>
        </Modal>

        <div className="product-list-item">
          <Card>
            <CardImg
              height={200}
              title={this.props.product.name}
              src={this.props.product.img}
              alt={this.props.product.name}
              onClick={this.toggle}
            />
            <CardBody>
              <CardTitle onClick={this.toggle}>
                <h3>{this.props.product.name}</h3>
              </CardTitle>
              <CardText onClick={this.toggle}>
                {' '}
                {this.props.product.description}
              </CardText>
              <CardSubtitle onClick={this.toggle}>
                ${this.props.product.price}
              </CardSubtitle>
              <Button onClick={this.toggle}>Learn More</Button>
              {this.props.currentUser.username ? (
                <div>
                  <br />
                  <Button
                    color="primary"
                    onClick={() => this.props.addToCart(this.props.product)}>
                    Add to Cart (
                    {(this.props.cartItem && this.props.cartItem.quantity) || 0}
                    )
                  </Button>
                  <br />

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
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.loggedin.currentUser
  };
}

export default connect(mapStatetoProps)(ProductListItem);
