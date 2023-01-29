import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Images/logo.webp";
import Button from "react-bootstrap/Button";
import MainHeader from "../MainHeader/MainHeader";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  const { user, logouthande } = useContext(AuthContext);
  console.log(user);
  const logouthandler = () => {
    logouthande()
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        // className="d-none d-lg-block"
        expand="lg"
        bg="danger"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="header-item">Typography</Link>
              <Link className="header-item">Layouts</Link>
              <Link to="/contact" className="header-item">
                Contact
              </Link>
              <Link className="header-item"> Forum</Link>
              <Link to="/shop" className="header-item">
                {" "}
                Shop
              </Link>
            </Nav>
            <Nav>
              <Link to="/user">
                {user?.photoURL ? (
                  <img className="users" src={user.photoURL} alt="" />
                ) : (
                  <FaUserAlt className="user"></FaUserAlt>
                )}
              </Link>
              {/* {user?.photoURL ? (
                <img className="users" src={user.photoURL} alt="" />
              ) : (
                <FaUserAlt className="user"></FaUserAlt>
              )} */}
              {user?.uid ? (
                <>
                  <Link to="/user" className="header-item">
                    {" "}
                    {user?.displayName}
                  </Link>

                  <Button
                    onClick={logouthandler}
                    className="sihnup-btn"
                    variant="outline-warning"
                  >
                    Logout
                  </Button>
                  <Button className="sihnup-btn" variant="outline-warning">
                    <Link className="lin" to="/login">
                      Login
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button className="sihnup-btn" variant="outline-warning">
                    <Link className="lin" to="/signup">
                      Signup
                    </Link>
                  </Button>
                  <Button className="sihnup-btn" variant="outline-warning">
                    <Link className="lin" to="/login">
                      Login
                    </Link>
                  </Button>
                </>
              )}

              {/* <Button className="sihnup-btn" variant="outline-info">
                <Link to="/signup">Signup</Link>
              </Button>
              <Button className="sihnup-btn" variant="outline-info">
                <Link to="/login">Login</Link>
              </Button> */}
              {/* <Button
                onClick={logouthandler}
                className="sihnup-btn"
                variant="outline-warning"
              >
                Logout
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header2-container">
        <div className="header-2-left">
          <img src={logo} alt="" />
        </div>

        <div className="header-2-right">
          <h2>
            Voise is <span>30% faster!</span>
          </h2>
          <p>
            And more powerful with <br></br>amazing new features
          </p>
          <Button className="btnfind" variant="danger">
            FIND OUT MORE
          </Button>
        </div>
      </div>
      <MainHeader></MainHeader>
    </div>
  );
};

export default Header;
