import React, { useEffect, useState } from "react";
import "./Card.css";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <>
      <div className="card-container">
        <div className="card-left">
          {cards.map((card) => (
            <SingleCard 
            card={card}
            ></SingleCard>
          ))}
        </div>

        {/* Right Section  */}
        <div className="card-right">
          <h4>Spent time on read : 177 min</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
