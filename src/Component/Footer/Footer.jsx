import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import insta from "@iconscout/react-unicons/icons/uil-instagram";
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
          <UilInstagram style={{ color: "white", fontSize: "7rem" }} />
          <UilFacebook style={{ color: "white", width: "7rem" }} />
          <UilGithub style={{ color: "white", width: "7rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
