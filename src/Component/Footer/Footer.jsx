import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";

import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";

import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilGithub from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <img
        src={wave}
        style={{ width: "100%", backgroundSize: "cover" }}
        alt=""
      />
      <div className="f-content">
        <span>maheshbiswas26@gmail.com</span>
        <div className="f-icons">
          <UilInstagram color="white" size="3rem" />
          <UilFacebook color="white" size="3rem" />
          <UilGithub color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
