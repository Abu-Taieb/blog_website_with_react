import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = () => {
    const [card, setCard] = useState([]);
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
                <img className='cover-img' src={'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80'} alt="" />
                <div className="card-body">
                    <div className="author">
                        <div className="">
                            <img src={'https://images.unsplash.com/profile-1626105542798-a66c7f6728a6image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'} alt="" />
                        </div>
                        <div className="author-details">
                            <h4>Name : </h4>
                            <p>Publish Date : </p>
                        </div>
                    </div>
                    <div className="bookmark">
                        <p className="bookmark-detail">readTime : min read</p>
                        <button><i class="fa-regular fa-bookmark"></i></button>
                        
                    </div>
                </div>
                <h2>Blog Title : </h2>
                <div className="keyword">
                    <span>#beginners</span>
                    <span>#programming</span>
                </div>
                <a className="read-more-btn">Mark as read</a>
            </div>
            <div className="card-right">
                <h2>Card Right</h2>
            </div>
        </div>
        </>
    );
};

export default Card;