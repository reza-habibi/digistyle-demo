import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";
import { Link } from "react-router-dom";
import { DesktopBannerSlider } from "../../../data";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function DesktopCarousel() {
  return (
    <>
      <Swiper
        id="desktopCarousel"
        autoplay={{ delay: 8000 }}
        navigation={true}
        pagination={true}
        loop={true}
        className="mySwiper hidden lg:block h-full w-full "
      >
        {DesktopBannerSlider.map((category: any, index: number) => (
          <SwiperSlide key={index} className=" rounded-lg h-auto">
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
