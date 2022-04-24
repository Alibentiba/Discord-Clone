import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Portfolio.css'
import b from './b.png'
import d from './d.jpg'
SwiperCore.use([EffectCoverflow, Pagination]);
export const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
        <SwiperSlide>
          <img src={d} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};






  
