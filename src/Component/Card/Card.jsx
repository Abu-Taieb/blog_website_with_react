import React, { useEffect, useState } from "react";
import "./Card.css";
import SingleCard from "../SingleCard/SingleCard";
import Bookmark from "../Bookmark/Bookmark";

const Card = ({handleReadTime, readTime, handleBookmark}) => {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <>
      <div className="card-container">
        {/* Left Section  */}
        <div className="card-left">
          {cards.map((card) => (
            <SingleCard 
            card={card}
            handleReadTime={handleReadTime}
            handleBookmark={handleBookmark}
            ></SingleCard>
          ))}
        </div>

        {/* Right Section  */}
        <div className="card-right">
        <Bookmark readTime={readTime}></Bookmark>
        </div>
      </div>
    </>
  );
};

export default Card;
