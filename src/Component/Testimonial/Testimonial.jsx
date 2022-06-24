import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import "./Textimonial.css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const card = [
    {
      image: profile1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora neque totam, odit aliquid a optio perferendis id dolorem deleniti exercitationem, ipsam eaque quasi unde commodi accusantium fuga! Distinctio, aspernatur impedit. Nulla, sed labore.",
    },
    {
      image: profile2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora neque totam, odit aliquid a optio perferendis id dolorem deleniti exercitationem, ipsam eaque quasi unde commodi accusantium fuga! Distinctio, aspernatur impedit. Nulla, sed labore.",
    },
    {
      image: profile3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora neque totam, odit aliquid a optio perferendis id dolorem deleniti exercitationem, ipsam eaque quasi unde commodi accusantium fuga! Distinctio, aspernatur impedit. Nulla, sed labore.",
    },
    {
      image: profile4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora neque totam, odit aliquid a optio perferendis id dolorem deleniti exercitationem, ipsam eaque quasi unde commodi accusantium fuga! Distinctio, aspernatur impedit. Nulla, sed labore.",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>(Fake review)</span> <br />
        <span> Client always get</span>
        <span> Expectional work</span>
        <span>for me......</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* swipper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {card.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="tastimonial">
                <img src={slide.image} alt="" />
                <span>{slide.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
