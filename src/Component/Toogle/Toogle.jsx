import React from "react";

import "./Toogle.css";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Toogle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handelClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toogle">
      <UilSun />
      <UilMoon />
      <div
        className="t-button"
        onClick={handelClick}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toogle;
