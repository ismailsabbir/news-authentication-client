import React, { useContext, useState } from "react";
import "./LoginSignin.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../UserContext/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const LoginSignin = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { userlogin, setloading } = useContext(AuthContext);
  const [passerror, setpasserror] = useState("");
  const [sucess, setsucess] = useState(false);
  const submithandler = (event) => {
    event.preventDefault();
    setsucess(false);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const conframpassword = event.target.conpassword.value;
    console.log(email, password, conframpassword);
    if (password !== conframpassword) {
      setpasserror("password not match");
      return;
    }
    setpasserror("");
    userlogin(email, password)
      .then((req) => {
        const user = req.user;
        console.log(user);
        setsucess(true);
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("please verified your email address");
        }
      })
      .catch((error) => {
        console.error(error);
        setpasserror(error.message);
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <div className="signup">
      <h4>Log in</h4>
      <Form onSubmit={submithandler}>
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
        <Button className="submit-btn" variant="primary" type="submit">
          Signup
        </Button>
        <p>------OR------</p>
        <Button className="submit-btn" variant="outline-info">
          Signup with Google
        </Button>
        <p>
          New User ?please <Link to="/signup">Signup</Link>
        </p>
        <p className="error">{passerror}</p>
        {sucess && <p className="sucess">Login Sucessfull</p>}
      </Form>
    </div>
  );
};

export default LoginSignin;
