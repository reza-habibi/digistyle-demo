import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/core";
import { Link } from "react-router-dom";
import { Categories } from "../../../data";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function CategoryDesktopBannerCarousel({ category }: any) {
  return (
    <>
      <Swiper
        autoplay={{ delay: 8000 }}
        navigation={true}
        pagination={true}
        loop={true}
        className="mySwiper hidden lg:block w-full "
      >
        {category.subCategory.map((item: any, index: number) => (
          <SwiperSlide key={index} className="w-full rounded-lg h-auto">
            <figure className="w-full">
              <Link to={item.url}>
                <img
                  src={`/images/sliders/${item.nameEn}.jpg`}
                  alt=""
                  className="w-full h-auto ml-auto mr-auto"
                />
              </Link>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        autoplay={{ delay: 8000 }}
        slidesPerView={"auto"}
        className="mySwiper lg:hidden w-full mt-5 bg-white"
      >
        {category.subCategory.map((item: any, index: number) => (
          <SwiperSlide key={index} className="w-full rounded-lg h-auto">
            <figure className="w-full">
              <Link to={item.url}>
                <img
                  src={`/images/sliders/${item.nameEn}.jpg`}
                  alt=""
                  className="w-full h-auto ml-auto mr-auto"
                />
              </Link>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
