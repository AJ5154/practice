import React from "react";
import NewsCards from "./NewsCards";
import "./DataSlider.css";
function DataSlider() {
  let box = document.querySelector(".news_container");
  const prevBtn = () => {
    let widthOfCard = box.clientWidth;
    box.scrollLeft = box.scrollLeft - widthOfCard;
  };
  const nextBtn = () => {
    let widthOfCard = box.clientWidth;
    box.scrollLeft = box.scrollLeft + widthOfCard;
  };
  return (
    <div className="news_data_slider">
      <button className="pre_btn" onClick={prevBtn}>
        <p>&lt;</p>
      </button>
      <button className="post_btn" onClick={nextBtn}>
        <p>&gt;</p>
      </button>
      <div className="news_container">
        <NewsCards />
      </div>
    </div>
  );
}

export default DataSlider;
