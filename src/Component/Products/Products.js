import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import "./Product.css";
const Products = () => {
  const products = useLoaderData();
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product data={product}></Product>
      ))}
    </div>
  );
};
export default Products;
