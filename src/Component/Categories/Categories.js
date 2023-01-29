import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSumary from "../NewsSumary/NewsSumary";
import "./Categories.css";
const Categories = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="categories-container">
      {data.map((news) => (
        <NewsSumary news={news}></NewsSumary>
      ))}
    </div>
  );
};

export default Categories;
