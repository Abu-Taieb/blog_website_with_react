import React, { useEffect, useState } from "react";
import "./Bookmark.css";

const Bookmark = ({readTime}) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTimeFLS = localStorage.getItem('readTime');
    setTime(getReadTimeFLS);
  },[readTime])
  return (
    <div>
      <div className="count-time">
        <h4>Spent time on read : {time} min</h4>
      </div>
      <div className="bookmark-container">
        <h4 className="bookmark-header">Bookmarked Blogs : </h4>
        <div className="added-bookmark">
            <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
