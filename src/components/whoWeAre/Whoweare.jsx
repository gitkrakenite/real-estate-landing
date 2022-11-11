import React from "react";
import "./whoweare.css";

// import Image from "../../assets/house1.jpg";

import { AiFillCheckCircle, AiFillCaretDown } from "react-icons/ai";

const Whoweare = () => {
  return (
    <div className="whoWeAreWrapper">
      <div className="whoWeAreImage">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>

      <div className="whoWeAreText">
        <h1>Who We Are and What You Get From Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et id alias,
          doloribus officia quia nisi ea iste ab corrupti vero, odit sint nihil
          dolorem eligendi? Explicabo ipsum nesciunt natus cum ut eaque quas
          nihil ex quidem. Quaerat totam corporis blanditiis!
        </p>

        <div className="whoWeAreCheckLists">
          <div className="whoWeAreItem">
            <AiFillCheckCircle className="Icon" />
            <div className="whoWeAreItemSpan">
              <div style={{ flex: 0.5 }}>
                <span>Best price on the market</span>
              </div>
              <div style={{ flex: 0.5, textAlign: "end" }}>
                <AiFillCaretDown className="icon" />
              </div>
            </div>
          </div>
          <div className="whoWeAreItem">
            <AiFillCheckCircle className="Icon" />
            <div className="whoWeAreItemSpan">
              <div style={{ flex: 0.5 }}>
                <span>Over 20 experienced agents</span>
              </div>
              <div style={{ flex: 0.5, textAlign: "end" }}>
                <AiFillCaretDown className="icon" />
              </div>
            </div>
          </div>
          <div className="whoWeAreItem">
            <AiFillCheckCircle className="Icon" />
            <div className="whoWeAreItemSpan">
              <div style={{ flex: 0.5 }}>
                <span>Trusted Property</span>
              </div>
              <div
                style={{
                  flex: 0.5,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  textAlign: "end",
                }}
              >
                <AiFillCaretDown className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
