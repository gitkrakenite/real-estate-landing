import React from "react";
import "./footer.css";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <div className="footerInitial">
          <h1>YO CRIB</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
            cupiditate deserunt, sequi eaque provident possimus harum suscipit,
            assumenda nulla, consectetur itaque vitae accusamus eligendi ipsam
            doloribus odit voluptates iure?
          </p>

          <div className="footerInitialIcons">
            <BsFacebook style={{ cursor: "pointer" }} />
            <BsTwitter style={{ cursor: "pointer" }} />
            <BsInstagram style={{ cursor: "pointer" }} />
          </div>
        </div>
        {/*  */}
        <div className="footerLastDiv">
          <div className="firstColumn">
            <h2>About</h2>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>News & Blog</li>
            </ul>
          </div>
          <div className="firstColumn">
            <h2>Company</h2>
            <ul>
              <li>How we work</li>
              <li>Capital</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="firstColumn">
            <h2>Support</h2>
            <ul>
              <li>FAQs</li>
              <li>Support Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="firstColumn ty">
            <h2>Resources</h2>
            <ul>
              <li>Our Agents</li>
              <li>Customer Stories</li>
              <li>Videos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerLastElement">&copy; 2022 All rights reserved</div>
    </div>
  );
};

export default Footer;
