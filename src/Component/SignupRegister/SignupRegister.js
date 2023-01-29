import React, { useContext, useState } from "react";
import "./SignupRegister.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../UserContext/UserContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const SignupRegister = () => {
  const [passerror, setpasserror] = useState("");
  const [accept, setaccept] = useState(false);
  const [sucess, setsucess] = useState(false);
  const { createuser, updateusername, emailverification } =
    useContext(AuthContext);
  const submithandler = (event) => {
    event.preventDefault();
    setsucess(false);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const conframpassword = event.target.conpassword.value;
    console.log(name, email, password, conframpassword);
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setpasserror("At least two uppercase latter");
      return;
    }
    if (password.length < 6) {
      setpasserror("At least 6 digit");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setpasserror("At least one special Character");
      return;
    }
    if (password !== conframpassword) {
      setpasserror("Password not match");
      return;
    }
    setpasserror("");
    createuser(email, password)
      .then((req) => {
        const user = req.user;
        console.log(user);
        setsucess(true);
        updateusername(name)
          .then((req) => {
            // const user = req.user;
            // console.log(user);
          })
          .catch((error) => {
            console.error(error);
            setpasserror(error.message);
          });
        emailverification()
          .then(() => {
            toast.success("check your email address");
          })
          .catch((error) => {
            console.error(error);
            setpasserror(error.message);
          });
      })
      .catch((error) => {
        console.error(error);
        setpasserror(error.message);
      });
  };
  const handlecheck = (event) => {
    setaccept(event.target.checked);
  };
  return (
    <div className="signup">
      <h4>signup</h4>
      <Form onSubmit={submithandler}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confram Password</Form.Label>
          <Form.Control
            type="password"
            name="conpassword"
            placeholder="Confram Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="checked"
            onClick={handlecheck}
            label={
              <>
                Accept<Link to="/terms">Terms and condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button
          className="submit-btn"
          variant="primary"
          type="submit"
          disabled={!accept}
        >
          Signup
        </Button>
        <p>------OR------</p>
        <Button className="submit-btn" variant="outline-info">
          Signup with Google
        </Button>
        <p>
          Already have an acount ? please <Link to="/login">Log in</Link>
        </p>
        <p className="error">{passerror}</p>
        {sucess && <p className="sucess">Sucessfull signup</p>}
      </Form>
    </div>
  );
};

export default SignupRegister;
