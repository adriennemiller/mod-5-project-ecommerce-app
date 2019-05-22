import React from 'react';
import ProductList from '../features/product-list';
import { Container, Row, Col } from 'reactstrap';

export default function Homepage(props) {
  return (
    <div>
      <Col>
        <ProductList />
      </Col>
    </div>
  );
}
