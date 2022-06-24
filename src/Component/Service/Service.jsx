import React from "react";
import "./Service.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";
const Service = () => {
  const transition = { duration: "1", type: "spring" };
  return (
    <div className="service" id="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Here is my some project's which is made by me. And I <br /> create
          this using React, Javascript, Nodejs
        </span>
        <a
          href="https://drive.google.com/file/d/1D9mtnCQtlNhbQfZsAZHrFqap1I29XVPO/view"
          download
          target="_blank"
        >
          <button className="btn s-btn">DOWNLOAD CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side  */}
      <motion.div
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
        style={{ left: "14rem" }}
        className="cards"
      >
        <Card
          image={heartemoji}
          heading={"Design"}
          details={
            "Html, Css, Javascript, Tailwind, Desiui, React js, Node js, Express js, Mongo DB, Firebase"
          }
        />
      </motion.div>
      <motion.div
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
        style={{ left: "-4rem", top: "12rem" }}
        className="cards"
      >
        <Card
          image={glasses}
          heading={"Developer"}
          details={
            "Html, Css, Javascript, Tailwind, Desiui, React js, Node js, Express js, Mongo DB, Firebase"
          }
        />
      </motion.div>
      <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        style={{ left: "12rem", top: "19rem" }}
        className="cards"
      >
        <Card
          image={humble}
          heading={"UI/UX"}
          details={
            "Html, Css, Javascript, Tailwind, Desiui, React js, Node js, Express js, Mongo DB, Firebase"
          }
        />
      </motion.div>
      <div
        className="blur s-blur2"
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  );
};

export default Service;
