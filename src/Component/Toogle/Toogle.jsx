import React from "react";

import "./Toogle.css";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
const Toogle = () => {
  return (
    <div className="toogle">
      <UilSun />
      <UilMoon />
      <div className="t-button"></div>
    </div>
  );
};

export default Toogle;
