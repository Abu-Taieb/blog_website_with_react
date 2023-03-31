import React from "react";
import "./SingleCard.css";

const SingleCard = ({card}) => {
    const {blogCoverImage, authorImage, authorName, publishDate, readTime, blogTitle} = card;
  console.log(card);
  return (
    <div>
      <div className="card">
        <img
          className="cover-img" src={blogCoverImage} alt=""/>
        <div className="card-body">
          <div className="author">
            <div className="">
              <img src={authorImage} alt=""/>
            </div>
            <div className="author-details">
              <h4>{authorName}</h4>
              <p>{publishDate}</p>
            </div>
          </div>
          <div className="bookmark">
            <p className="bookmark-detail">0{readTime} min read</p>
            <button>
              <i className="fa-regular fa-bookmark"></i>
            </button>
          </div>
        </div>
        <h2>{blogTitle}</h2>
        <div className="keyword">
          <span>#beginners</span>
          <span>#programming</span>
        </div>
        <a className="read-more-btn">Mark as read</a>
        <hr />
      </div>
    </div>
  );
};

export default SingleCard;
