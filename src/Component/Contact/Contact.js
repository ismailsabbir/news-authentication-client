import React from "react";
import "./Contact.css";
import imge from "../../Assets/Images/jip.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-img">
        <img src={imge} alt="" />
      </div>
      <div className="contact-information">
        <h3>Contact</h3>
        <p>
          This is an example of a contact page with full support for the WP
          Forms WordPress plugin. Please use our official contact page if you
          have any pre-sale questions. We would love to hear from you!
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Nmae" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              type="text"
              className="message"
              placeholder="Enter mesaage"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="header-2-rights">
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
  );
};

export default Contact;
