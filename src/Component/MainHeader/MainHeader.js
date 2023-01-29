import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./MainHeader.css";
const MainHeader = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch(` https://news-authentication-server.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="main-header">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 left-nev"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="header-items" to="/">
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  to={`/categories/${category.id}`}
                  className="header-items"
                >
                  {category.name}
                </Link>
              ))}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainHeader;
