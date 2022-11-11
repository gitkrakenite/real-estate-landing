import React from "react";
import "./apartment.css";

import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const Apartment = () => {
  return (
    <div className="apartmentWrapper">
      <div className="apartmentTop">
        <div className="apartmetTopLeft">
          <h1>Luxury Apartments</h1>
          <p>Lorem ipsum dolor, sit amet consectetu</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="apartmentTopRight">
          <IoIosArrowBack className="topRightIcon" />
          <MdOutlineNavigateNext
            className="topRightIcon"
            style={{ fontSize: "27px" }}
          />
        </div>
      </div>

      {/*  */}
      <div className="aprtmentComponents">
        <div className="cardComponent">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="cardText">
            <p>
              <span style={{ color: "orange" }}>$</span> 97,026
            </p>
            <span>Philly Homes</span>
            <div className="cardLocation">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#8d8b8b",
                }}
              >
                <BiLocationPlus />
                <h6>Kabanas real estate</h6>
              </div>
              <div className="cardLike">
                <FcLike />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="cardComponent">
          <img
            src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="cardText">
            <p>
              <span style={{ color: "orange" }}>$</span> 97,026
            </p>
            <span>Mancini Homes</span>
            <div className="cardLocation">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#8d8b8b",
                }}
              >
                <BiLocationPlus />
                <h6>Nairobi Geovani street</h6>
              </div>
              <div className="cardLike">
                <FcLike />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="cardComponent">
          <img
            src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="cardText">
            <p>
              <span style={{ color: "orange" }}>$</span> 97,026
            </p>
            <span>Valery Homes</span>
            <div className="cardLocation">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#8d8b8b",
                }}
              >
                <BiLocationPlus />
                <h6>Juja city drive</h6>
              </div>
              <div className="cardLike">
                <FcLike />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
