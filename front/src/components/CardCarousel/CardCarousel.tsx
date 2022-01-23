import { Swiper, SwiperSlide } from "swiper/react";
import { TProducts } from "../../type.ds";
import Humanize from "humanize-plus";
import {
  SearchIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/outline";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { showDrawer } from "../../redux/actions/drawerAction";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function CardCarousel({ products }: any) {
  const dispatch = useDispatch();

  const addToCartHandler = (productId: string) => {
    const qty = 1;
    dispatch(addToCart(productId, qty));
    dispatch(showDrawer());
  };

  return (
    <>
      <div className="hidden lg:block">
        <Swiper
          id="main"
          dir="rtl"
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            "480": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "1024": {
              slidesPerView: 3,
              spaceBetween: 50,
            },

            "1324": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            "1640": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper my-4"
        >
          {products.map((product: TProducts) => (
            <SwiperSlide
              key={product._id}
              className="bg-white shadow-lg rounded-lg h-100 py-2 transform lg:hover:translate-y-2 lg:hover:shadow-xl transition duration-300 mb-3"
            >
              <div className="w-full relative product-card">
                <div className="bg-white rounded-lg h-100 p-2  mb-3">
                  <figure className="mb-2">
                    <Link to={`/products/${product._id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-60 ml-auto mr-auto"
                      />
                    </Link>
                  </figure>
                  <span className="brands absolute top-0 right-0 text-gray-500 bg-gray-200 px-5 py-2 text-lg rounded-tr-lg">
                    {product.brandFa}
                  </span>
                  <div className="rounded-lg p-2 bg-white flex flex-col mb-3">
                    <div>
                      <Link to={`/products/${product._id}`}>
                        <h5 className="text-gray-700 text-xl font-bold leading-6 ">
                          {product.name}
                        </h5>
                      </Link>
                      <span className="text-lg text-gray-700 leading-none">
                        {product.description}
                      </span>
                    </div>
                    {product.countInStock === 0 && (
                      <span className="text-lg text-red-400">
                        محصول در انبار موجود نمی باشد.
                      </span>
                    )}
                    <div className="flex justify-center items-center mt-3">
                      <div className="lg:text-2xl md:text-xl text-gray-700 font-light">
                        {" "}
                        {Humanize.intComma(product.price)} تومان
                      </div>
                      <div className="card-actions flex-col bg-white lg:rounded-lg rounded-xl  items-center justify-center shadow-2xl absolute lg:left-16 left-5 lg:hidden lg:top-24 top-5 animate-fade-in-right">
                        <button className="flex justify-center items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-red-500">
                          <HeartIcon
                            className="block h-8 w-8"
                            aria-hidden="true"
                          />
                        </button>
                        {product.countInStock > 0 && (
                          <button
                            className="rounded-full flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-yellow-500"
                            onClick={() => addToCartHandler(product._id)}
                          >
                            <ShoppingCartIcon
                              className="block h-8 w-8"
                              aria-hidden="true"
                            />
                          </button>
                        )}
                        <button className="rounded-full hidden md:flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-green-500">
                          <SearchIcon
                            className="block h-8 w-8"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:hidden">
        <Swiper
          dir="rtl"
          spaceBetween={30}
          autoplay={{ delay: 8000 }}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
              navigation: false,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.75": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@2.50": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper my-4"
        >
          {products.map((product: TProducts) => (
            <SwiperSlide
              key={product._id}
              className="bg-white shadow-lg rounded-lg h-100 py-2 transform lg:hover:translate-y-2 lg:hover:shadow-xl transition duration-300 mb-3"
            >
              <div className="w-full relative product-card">
                <div className="bg-white rounded-lg h-100 p-2  mb-3">
                  <figure className="mb-2">
                    <Link to={`/products/${product._id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-60 ml-auto mr-auto"
                      />
                    </Link>
                  </figure>
                  <span className="brands absolute top-0 bg-white right-0 text-gray-500 bg-gray-200 px-5 py-2 text-lg rounded-tr-lg">
                    {product.brandFa}
                  </span>
                  <div className="rounded-lg p-2 bg-white flex flex-col mb-3">
                    <div>
                      <Link to={`/products/${product._id}`}>
                        <h5 className="text-gray-700 text-xl font-bold leading-6 ">
                          {product.name}
                        </h5>
                      </Link>
                      <span className="text-lg text-gray-700 leading-none">
                        {product.description}
                      </span>
                    </div>
                    <div className="flex justify-center items-center mt-3">
                      <div className="lg:text-2xl md:text-xl text-gray-700 font-light">
                        {" "}
                        {Humanize.intComma(product.price)} تومان
                      </div>
                      <div className="card-actions flex-col bg-white lg:rounded-lg rounded-xl  items-center justify-center shadow-2xl absolute lg:left-24 left-5 lg:hidden lg:top-24 top-5 animate-fade-in-right">
                        <button className="flex justify-center items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-red-500">
                          <HeartIcon
                            className="block h-8 w-8"
                            aria-hidden="true"
                          />
                        </button>
                        <button className="rounded-full flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-yellow-500">
                          <ShoppingCartIcon
                            className="block h-8 w-8"
                            aria-hidden="true"
                          />
                        </button>
                        <button className="rounded-full hidden md:flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-green-500">
                          <SearchIcon
                            className="block h-8 w-8"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
