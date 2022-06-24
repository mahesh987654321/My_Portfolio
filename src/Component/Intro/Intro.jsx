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
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: "2", type: "spring" };
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
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FlotingDiv image={crown} txt1="web" txt2="developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FlotingDiv image={thumbup} txt1="Best Design" txt2="award" />
        </motion.div>
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
