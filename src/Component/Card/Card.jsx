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
        
        <div className="qa-container">
        <h4 className="qa-header">4 Question & Answer </h4>
        <div className="qa-content">
            <h4>Question 1 : What is the different between Props vs state?</h4>
            <p>Answer : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, ipsam.</p>
        </div>
        <div className="qa-content">
            <h4>Question 2 : How does useState work?</h4>
            <p>Answer : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, ipsam.</p>
        </div>
        <div className="qa-content">
            <h4>Question 3 : Purpose of useEffect other than fetching data?</h4>
            <p>Answer : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, ipsam.</p>
        </div>
        <div className="qa-content">
            <h4>Question 4 : How Does React work?</h4>
            <p>Answer : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, ipsam.</p>
        </div>
      </div>

      </div>
    </>
  );
};

export default Card;
