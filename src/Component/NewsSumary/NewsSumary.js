import React from "react";
import "./NewsSumary.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const NewsSumary = (props) => {
  const { title, image_url, total_view, rating, author, _id } = props.news;
  console.log(props.news);
  return (
    <div className="sumary-container">
      <div className="sumary-left">
        <img src={image_url} alt="" />
      </div>
      <div className="sumary-right">
        <h4>{title}</h4>

        <p>Publish Date :{author.published_date}</p>

        <div className="sumary-detals">
          <p>Total View :{total_view}</p>
          <p>Rating:{rating.number}</p>
        </div>
        <Button variant="info">
          <Link className="detals-btn" to={`/news/${_id}`}>
            READ MORE
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NewsSumary;
