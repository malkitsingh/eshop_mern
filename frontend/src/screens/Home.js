import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((prod) => {
          return (
            <Col key={prod._id} sm={12} md={6} lg={4} cl={3}>
              <Product product={prod} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
