import React from "react";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <div>
      <h5>Accept terms and condition</h5>
      <p>
        Go back <Link to="/signup">Register</Link>
      </p>
    </div>
  );
};

export default TermsCondition;
