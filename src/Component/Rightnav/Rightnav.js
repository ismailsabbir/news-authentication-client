import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./Rightnav.css";
const Rightnav = () => {
  const { signupwithgoogle } = useContext(AuthContext);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch(` https://news-authentication-server.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);
  console.log(categories);
  const handlegooglesinup = () => {
    signupwithgoogle()
      .then((req) => {
        const user = req.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="right-nav">
      <Button
        onClick={handlegooglesinup}
        className="google-btn"
        variant="outline-info"
      >
        Signup With Google
      </Button>
      <Button className="google-btn" variant="outline-primary">
        <Link to="/signup">Signup With Email</Link>
      </Button>
      <h5>CATEGORIES</h5>
      {categories.map((category) => (
        <button className="categori-btn">
          <Link to={`/categories/${category.id}`} className="link">
            {category.name}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default Rightnav;
