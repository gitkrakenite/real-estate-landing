import React from "react";
import "./stories.css";

// import Image from "../../assets/house1.jpg";
import { AiOutlineStar } from "react-icons/ai";

const Stories = () => {
  return (
    <div className="storiesWrapper">
      <div className="colorOverlay"></div>

      <div className="storycontent">
        <h1>Customer Stories</h1>

        <div className="storyUsers">
          {/*  */}
          <div className="storyItem">
            <div className="storyTop">
              <div className="storyTopLeft">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />

                <div>
                  <p>Amelia Wakanda</p>
                  <span>Photographer</span>
                </div>
              </div>

              <div className="storyTopRight">
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
            <div className="storyBottom">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis nihil nisi accusamus ullam qui nobis animi quos impedit
                amet repellendus quis, numquam dignissimos facilis quasi.
                Facilis ipsa excepturi, porro quod doloremque quam ab mollitia
                reiciendis praesentium sunt eveniet? Placeat, voluptate?
              </p>
            </div>
          </div>
          {/*  */}
          <div className="storyItem">
            <div className="storyTop">
              <div className="storyTopLeft">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />

                <div>
                  <p>Amelia Wakanda</p>
                  <span>Photographer</span>
                </div>
              </div>

              <div className="storyTopRight">
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
              </div>
            </div>
            <div className="storyBottom">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis nihil nisi accusamus ullam qui nobis animi quos impedit
                amet repellendus quis, numquam dignissimos facilis quasi.
                Facilis ipsa excepturi, porro quod doloremque quam ab mollitia
                reiciendis praesentium sunt eveniet? Placeat, voluptate?
              </p>
            </div>
          </div>

          {/*  */}
          <div className="storyItem">
            <div className="storyTop">
              <div className="storyTopLeft">
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />

                <div>
                  <p>Amelia Wakanda</p>
                  <span>Photographer</span>
                </div>
              </div>

              <div className="storyTopRight">
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar />
              </div>
            </div>
            <div className="storyBottom">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis nihil nisi accusamus ullam qui nobis animi quos impedit
                amet repellendus quis, numquam dignissimos facilis quasi.
                Facilis ipsa excepturi, porro quod doloremque quam ab mollitia
                reiciendis praesentium sunt eveniet? Placeat, voluptate?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
