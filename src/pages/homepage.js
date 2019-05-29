import React from 'react';
import ProductList from '../features/product-list';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export default function Homepage(props) {
  return (
    <div>
      <div>
        <Jumbotron className="jumbo-image small-jumbo-image">
          <h1 className="display-3  jumbo-head-text">Hello, world!</h1>
          <p className="lead jumbo-body-text">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p className="lead">
            <Button className="white-button">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
      <Col>
        <ProductList />
      </Col>
    </div>
  );
}
