import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Link } from "react-router-dom";
import { BannerSlider } from "../../../data";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 8000 }}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mySwiper lg:hidden w-full mt-5 bg-white"
      >
        {BannerSlider.map((category: any, index: number) => (
          <SwiperSlide
            key={index}
            className=" rounded-lg h-auto p-2 transition duration-300 mb-3"
          >
            <figure className="">
              <Link to={category.url}>
                <img
                  src={`/images/banner-slider/tablet-banner-${index+1}.jpg`}
                  alt=""
                  className="h-auto ml-auto mr-auto"
                />
              </Link>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
}
