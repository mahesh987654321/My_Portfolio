import React from "react";
import "./FloatingDiv.css";
const FlotingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div>
      <div className="floatDiv">
        <img src={image} alt="" />
        <span>
          {txt1} <br /> {txt2}
        </span>
      </div>
    </div>
  );
};

export default FlotingDiv;
