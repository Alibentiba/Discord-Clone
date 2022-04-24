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
return(
  <div className="Portfolio" id="Portfolio">
<span className="Recent_Projects">Recent Projects</span>

  <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
    <SwiperSlide>
      <span className="title">Project title:Ecomerc</span>
     <a href="https://translate.google.com/?sl=la&tl=ar&op=translate">
       <img src={b} alt="" />
       </a> 
    </SwiperSlide>
    <SwiperSlide>
    <span className="title">Project title:Netflix</span>
      <img src={d} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <span className="title">Project title:Total</span>
      <img src={b} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <span className="title">Project title:Total</span>
      <img src={d} alt="" />
    </SwiperSlide>
    
    
  </Swiper>
</div>










 
  
)};






  
