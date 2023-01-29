import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./News.css";
const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { title, image_url, total_view, rating, author, details, category_id } =
    news;
  return (
    <div className="news-detals-container">
      <h1>News{title}</h1>
      <div>
        <p>
          Rating {rating.number}.1 comment by {author.name}.View{total_view}
        </p>
      </div>
      <div className="detals-img">
        <img className="detals-img1" src={image_url} alt="" />
        <div className="authour-img">
          <img className="author-img" src={author.img} alt="" />
          <p>Written by {author.name}</p>
        </div>
      </div>
      <p className="dtals-news">{details}</p>
      <Button variant="info">
        <Link className="detals-btn" to={`/categories/${category_id}`}>
          Back to All news
        </Link>
      </Button>
    </div>
  );
};

export default News;
