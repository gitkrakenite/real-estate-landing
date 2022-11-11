import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletterWrapper">
      <div className="newsLetterImage">
        <img
          src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
      <div className="newsLetterContent">
        <h1>Subscribe to Our</h1>
        <h1>Newsletter</h1>

        <div className="newsInput">
          <input type="text" placeholder="Enter your email" />
          <span>Subscribe</span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
