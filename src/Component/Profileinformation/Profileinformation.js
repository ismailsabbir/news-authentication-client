import React, { useContext, useState } from "react";
import "./Profileinformation.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../UserContext/UserContext";
const Profileinformation = () => {
  const { user } = useContext(AuthContext);
  const [name, setname] = useState(user.displayName);
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  const namehandle = (event) => {
    setname(event.target.value);
  };
  return (
    <div className="profile-container">
      <h5>user information</h5>
      <div>
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onChange={namehandle}
              type="email"
              readOnly
              defaultValue={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" readOnly defaultValue={user?.email} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profileinformation;
