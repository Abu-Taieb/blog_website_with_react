import React from "react";
import "./Bookmark.css";

const Bookmark = () => {
  return (
    <div>
      <div className="count-time">
        <h4>Spent time on read : 177 min</h4>
      </div>
      <div className="bookmark-container">
        <h4 className="bookmark-header">Bookmarked Blogs : </h4>
        <div className="added-bookmark">
            <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
        </div>
        <div className="added-bookmark">
            <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
        </div>
        <div className="added-bookmark">
            <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
