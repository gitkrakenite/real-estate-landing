import React from "react";
import "./agent.css";

const Agents = () => {
  return (
    <div className="agents__wrapper">
      <h2>Contact Our Agents</h2>

      <div className="agentsContainer">
        <div className="agentItem">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <h3>Mike Ross</h3>
          <p>3+ Years Experience</p>

          <div className="agentItemBio">
            <span>About Mike</span>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              debitis laboriosam velit quasi neque vitae!
            </h6>
          </div>
        </div>
        {/*  */}
        <div className="agentItem">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <h3>Diana Rose</h3>
          <p>2+ Years Experience</p>

          <div className="agentItemBio">
            <span>About Diana</span>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              debitis laboriosam velit quasi neque vitae!
            </h6>
          </div>
        </div>
        {/*  */}
        <div className="agentItem">
          <img
            src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <h3>Mercy Gray</h3>
          <p>3+ Years Experience</p>

          <div className="agentItemBio">
            <span>About Mercy</span>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              debitis laboriosam velit quasi neque vitae!
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
