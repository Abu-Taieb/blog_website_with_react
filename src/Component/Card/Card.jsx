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
            key={card.id}
            handleReadTime={handleReadTime}
            handleBookmark={handleBookmark}
            ></SingleCard>
          ))}
        </div>

        {/* Right Section  */}
        <div className="card-right">
        <Bookmark readTime={readTime}></Bookmark>
        </div>
        
        {/* Question & Answer */}
        <div className="qa-container">
        <h4 className="qa-header">4 Question & Answer </h4>
        <div className="qa-content">
            <h4>Question 1 : What is the different between Props vs State?</h4>
            <p>Answer : Props are passed down from a parent component to a child component as immutable data.</p>
            <p>State is mutable data that can be changed by the component itself using the State method.</p>
        </div>
        <div className="qa-content">
            <h4>Question 2 : How does useState work?</h4>
            <p>Answer : useState is internal to a component and represents the component's current state. It is mutable data that can be changed by the component itself using the setState method. The state is used to manage things like user interactions, input fields, and other dynamic behavior that may change over time. State can lead to complex code and difficult-to-track bugs.</p>
        </div>
        <div className="qa-content">
            <h4>Question 3 : Purpose of useEffect other than fetching data?</h4>
            <p>Answer : useEffect can also be used for many other purposes</p>
            <ul>
              <li>Updating the document title,</li>
              <li>Setting up event listeners,</li>
              <li>Animating components,</li>
              <li>Updating a global state,</li>
              <li>Managing timers etc.</li>
            </ul>
        </div>
        <div className="qa-content">
            <h4>Question 4 : How Does React work?</h4>
            <p>Answer : React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the view when the underlying data changes. Overall, React provides a powerful and efficient way to build user interfaces using a declarative and component-based approach.</p>
        </div>
      </div>

      </div>
    </>
  );
};

export default Card;
