import React from "react";
import "./hero.css";

import videoBg from "../../assets/houseVid.mp4";

import Image from "../../assets/house1.jpg";

const Hero = () => {
  return (
    <div className="heroWrapper">
      {/* bgDark */}
      <div className="overlay"></div>

      {/* Whatever background */}
      <video src={videoBg} autoPlay loop muted />

      {/* content */}

      <div className="heroWrapcontent">
        <div className="heroHeader">
          <div className="logo">YoCrib</div>

          <div className="heroHeaderNavigation">
            <ul>
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="highActive"></div>
                Home
              </li>

              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="highActive"></div>
                Features
              </li>

              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="highActive"></div>
                Services
              </li>

              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="highActive"></div>
                About Us
              </li>
            </ul>
            <span>Contact Us</span>
          </div>
        </div>

        {/*  */}
        <div className="herowrapText">
          <h1>Find Your perfect</h1>
          <h1>Home</h1>
          <p>
            We make sure you get the best deal and at a very fair price. Comfort
            is the niche.
          </p>
          <p style={{ marginBottom: "2em" }}>Our other benefits include ...</p>
          <span>Get Started</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
