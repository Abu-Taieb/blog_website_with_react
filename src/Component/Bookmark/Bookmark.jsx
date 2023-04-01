import React, { useEffect, useState } from "react";
import "./Bookmark.css";

const Bookmark = ({readTime}) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTimeFLS = localStorage.getItem('readTime');
    setTime(getReadTimeFLS);
  },[readTime]);
  
  return (
    <div>
      <div className="count-time">
        <h4>Spent time on read : {time} min</h4>
      </div>
      <div className="bookmark-container">
        <h4 className="bookmark-header">Bookmarked Blogs : 4</h4>
        <div className="added-bookmark">
            <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
        </div>
        <div className="added-bookmark">
            <h4>How to get your first job as a self-taught programmer</h4>
        </div>
        <div className="added-bookmark">
            <h4>If you want to be a good programmer then you do practice Everyday</h4>
        </div>
        <div className="added-bookmark">
            <h4>Now JavaScript is a most powerful & popular Programming Language</h4>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
