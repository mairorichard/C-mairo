import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "../assets/slider.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="mx-6 sm:mx-11 lg:mx-16 my-5 -z-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slide} alt="" className="rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide} alt="" className="rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide} alt="" className="rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide} alt="" className="rounded-3xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
