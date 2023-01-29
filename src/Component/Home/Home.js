import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSumary from "../NewsSumary/NewsSumary";
import "./Home.css";
const Home = () => {
  const allnews = useLoaderData();
  console.log(allnews);
  return (
    <div className="home-container">
      <div>
        {allnews.map((news) => (
          <NewsSumary news={news} key={news._id}></NewsSumary>
        ))}
      </div>
    </div>
  );
};

export default Home;
