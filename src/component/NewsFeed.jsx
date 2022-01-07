import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const NewsFeed = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    var options = {
      method: "GET",
      url: "http://localhost:5000/news",
    };

    axios
      .request(options)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const newsLimit = news?.slice(1, 7);
  return (
    <div className="news-feed">
      <div className="head-news">
        <h1 className="head-news">Crypto News</h1>
      </div>
      {newsLimit?.map((news, index) => (
        <a key={index} href={news.url} target="_blank">
          <h2>{news.title}</h2>
        </a>
      ))}
    </div>
  );
};

export default NewsFeed;
