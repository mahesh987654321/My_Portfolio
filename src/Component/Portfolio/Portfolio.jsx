import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../../img/sidebar.png";
import ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Music from "../../img/musicapp.png";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Swiper</span>
      <span>POrtfolio</span>
      {/* swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Music} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
