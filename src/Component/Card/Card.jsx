import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = () => {
    const [card, setCard] = useState();
    console.log(card);

    useEffect(() => {
        fetch('card.json')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])

    return (
        <>
        <div className="card-container">
            <div className="card-left">
                <h2>Card : {}</h2>
                
            </div>
            <div className="card-right"></div>
        </div>
        </>
    );
};

export default Card;