import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const prod = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={prod.image} alt={prod.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{prod.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
              <Rating value={prod.rating} text={`${prod.numReviews} reviews`} />
            </ListGroupItem>

            <ListGroupItem>Price: ${prod.price}</ListGroupItem>
            <ListGroupItem>Description: {prod.description}</ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${prod.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {prod.countInStock > 0 ? "In stock" : "Out of stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button disabled={prod.countInStock === 0} className="btn-block" type="button">Add to cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
