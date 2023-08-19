import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DummyCard.css";
function DummyCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNewNews();
  }, []);

  const getNewNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-07-19&sortBy=publishedAt&apiKey=eb72608b2f62483d83980969c871b0b3"
      )
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  return (
    <div>
      {data.map((article, index) => (
        <div className="dummy_card" key={index}>
          <img
            className="dummy_card-img"
            src={article.urlToImage}
            alt="Article"
          />
          <div className="card-body">
            <h5 className="dummy_card-title">{article.title}</h5>
            <p className="dummy_card-text">{article.description}</p>
            <a href={article.url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DummyCard;
