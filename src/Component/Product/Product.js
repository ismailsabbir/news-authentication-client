import React from "react";
import "./prod.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { title, image, description } = props.data;
  console.log(props.data);
  return (
    <div className="card">
      <Card className="cards">
        <Card.Img className="product-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title.slice(0, 20)}</Card.Title>
          <Card.Text className="description">
            {description.slice(0, 50) + ".."}
            <Link>Read more</Link>
          </Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
