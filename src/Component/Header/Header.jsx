import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="header">
            <div className="">
              <h2>Shohoz Learn</h2>
            </div>
            <div className="header-right">
              <img
                src={
                  "https://images.unsplash.com/profile-1584094429096-258024c2abf4image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <hr className="main-border" />
      </div>
    </>
  );
};

export default Header;
