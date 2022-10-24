import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div>
      home{news.length}
      {news.map((n) => (
        <NewsCard key={n._id} news={n}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
