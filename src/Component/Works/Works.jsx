import React from "react";
import "./Works.css";
import facebook from "../../img/Facebook.png";
import amazon from "../../img/amazon.png";
import fiverr from "../../img/fiverr.png";
import Upwork from "../../img/Upwork.png";
import Shopify from "../../img/Shopify.png";
const Works = () => {
  return (
    <div className="work">
      <div className="awesome">
        <span>Works for all this</span>
        <span>Brands and Clients</span>
        <span>
          Hi! I am Mahesh Biswas, <br />I am aFront-end developer with a
          experience of <br /> 1 year. I can make dynamic website using
          javascript and its <br /> library And if you want to work with me then
          click the Hire me button
        </span>
        <a
          href="https://drive.google.com/file/d/1D9mtnCQtlNhbQfZsAZHrFqap1I29XVPO/view"
          download
          target="_blank"
        >
          <button className="btn s-btn">DOWNLOAD CV</button>
        </a>

        <div
          className="blurr s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      {/* roght side bwlow the code */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-seeCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-seeCircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="w-seeCircle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-seeCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-seeCircle">
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
