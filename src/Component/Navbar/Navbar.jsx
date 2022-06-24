import React from "react";
import Toogle from "../Toogle/Toogle";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Mahesh</div>
          <Toogle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Experience</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <button className="btn n-btn">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
