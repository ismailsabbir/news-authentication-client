import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import BigFooter from "../Component/BigFooter/BigFooter";
import Footer from "../Component/Footer/Footer";

import Header from "../Component/Header/Header";
import Rightnav from "../Component/Rightnav/Rightnav";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <container className="main-container">
        <Row>
          <Col lg="8" className="outlet">
            <Outlet></Outlet>
          </Col>
          <Col lg="4" className="rigtnav">
            <Rightnav></Rightnav>
          </Col>
        </Row>
      </container>
      {/* <BigFooter></BigFooter> */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
