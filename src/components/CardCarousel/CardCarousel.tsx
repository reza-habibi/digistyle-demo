import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../data";
import { TProducts } from "../../type.ds";
import Humanize from "humanize-plus";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, {  Navigation , Autoplay} from "swiper/core";

import { Link } from "react-router-dom";
// install Swiper modules
SwiperCore.use([ Navigation , Autoplay]);

export default function CardCarousel() {
  return (
    <>
      <Swiper
        id="main"
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1000: {
            width: 1300,
            slidesPerView: 4,
          },
        }}
        width={400}
        className="mySwiper my-8"
      >
        {data.products.map((product: TProducts) => (
          <SwiperSlide className="bg-white rounded-lg h-96 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 mb-3">
            <div key={product._id} className="w-full ">
              <div className="bg-white rounded-lg h-96 p-2  mb-3">
                <figure className="mb-2">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-60 ml-auto mr-auto"
                    />
                  </Link>
                </figure>
                <div className="rounded-lg p-2 bg-white flex flex-col mb-3">
                  <div>
                    <Link to={`/product/${product._id}`}>
                      <h5 className="text-gray-700 text-xl font-bold leading-none">
                        {product.name}
                      </h5>
                    </Link>
                    <span className="text-lg text-gray-700 leading-none">
                      {product.description}
                    </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="lg:text-2xl md:text-xl text-gray-700 font-light">
                      {" "}
                      {Humanize.intComma(product.price)} تومان
                    </div>
                    <div className="flex absolute left-10">
                      <button className="rounded-full flex justify-center	items-center  bg-black text-white hover:bg-red-500 hover:text-white hover:shadow-xl focus:outline-none p-4 mr-auto transition duration-300 ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="rounded-full flex justify-center	items-center  bg-black text-white hover:bg-red-500 hover:text-white hover:shadow-xl focus:outline-none p-4 mr-auto transition duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
