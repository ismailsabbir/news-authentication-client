import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BigfooterElement.css";
const BigFooterElement = (props) => {
  console.log(props.news);
  const { title, image_url, total_view } = props.news;
  return (
    <div className="container-big">
      <Row>
        <Col lg="8">
          <div className="big-foot-con">
            <div className="big-foot-ele">
              <div id="left">
                <img src={image_url} alt="" />
              </div>
              <div id="right">
                <p>{title}</p>
                <p>{total_view}</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="video" lg="4">
          <h1>video</h1>
        </Col>
      </Row>
    </div>
  );
};

export default BigFooterElement;
