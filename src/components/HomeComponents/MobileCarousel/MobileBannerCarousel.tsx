import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Link } from "react-router-dom";
import { MobileBannerSlider } from "../../../data";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 8000 }}
        spaceBetween={40}
        slidesPerView={"auto"}
        className="mySwiper sm:hidden w-full mt-5 bg-white"
      >
        {MobileBannerSlider.map((category: any, index: number) => (
          <SwiperSlide
            key={index}
            className=" rounded-lg h-96 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 mb-3"
          >
            <figure className="">
              <Link to={category.url}>
                <img
                  src={category.img}
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
