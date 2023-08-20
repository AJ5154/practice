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
        "https://gnews.io/api/v4/search?q=example&lang=en&country=pk&max=10&apikey=80ad10984b50944aaf52a052eb31ae04"
      )
      .then((response) => {
        if (response.data && response.data.articles) {
          setData(response.data.articles);
        }
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  return (
    <div>
      {data.map((article, index) => (
        <div className="dummy_card" key={index}>
          <img className="dummy_card-img" src={article.image} alt="Article" />
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
