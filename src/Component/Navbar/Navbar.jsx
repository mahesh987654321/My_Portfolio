import React from "react";
import Toogle from "../Toogle/Toogle";
import "./Navbar.css";
import { Link } from "react-scroll";
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
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </ul>
          </div>
          <button className="btn n-btn">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
