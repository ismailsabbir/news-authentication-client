import React, { useEffect, useState } from "react";
import BigFooterElement from "../BigFooterElement/BigFooterElement";
import "./BigFooter.css";
const BigFooter = () => {
  const [news, setnews] = useState([]);
  useEffect(() => {
    fetch(` https://news-authentication-server.vercel.app/categories/01`)
      .then((res) => res.json())
      .then((data) => setnews(data));
  }, []);
  console.log(news);
  return (
    <div className="bigfooter">
      {news.map((n) => (
        <BigFooterElement news={n}></BigFooterElement>
      ))}
    </div>
  );
};

export default BigFooter;
