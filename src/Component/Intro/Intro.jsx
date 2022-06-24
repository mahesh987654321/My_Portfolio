import React from "react";
import "./Intro.css";
import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FlotingDiv from "../FlotingDiv/FlotingDiv";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Mahesh Biswas</span>
          <span>
            Front-end developer with high level of experience in web
            development, producting the quality work. Make any product
            productive.
          </span>
        </div>
        <button className="btn i-btn">Hire me</button>
        <div className="i-icon">
          <a href="">
            <img src={github} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FlotingDiv image={crown} txt1="web" txt2="developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FlotingDiv image={thumbup} txt1="Best Design" txt2="award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "3rem",
            width: "21rem",
            height: "11rem",
            left: "-5rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
