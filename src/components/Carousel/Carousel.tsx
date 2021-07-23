import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Carousel() {
  return (
    <>
      <Swiper navigation={true} className="mySwiper md:h-auto w-4/5 mt-5">
        <SwiperSlide>
          <figure className="">
            <Link to={`/category/mens/shoes`}>
              <img
                src="/images/sliders/slide1.jpg"
                alt=""
                className="h-auto ml-auto mr-auto"
              />
            </Link>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="">
            <Link to={`/category/mens/shoes`}>
              <img
                src="/images/sliders/slide2.jpg"
                alt=""
                className="h-auto "
              />
            </Link>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
