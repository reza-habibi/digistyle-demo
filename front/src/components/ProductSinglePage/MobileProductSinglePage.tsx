import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Rating from "../Rating/Rating";
import {
  ChevronRightIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import Humanize from "humanize-plus";
import CardCarousel from "../CardCarousel/CardCarousel";
import Advantage from "../Advantage/Advantage";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productAction";
import Loading from "../Loading/Loading";
import MessageBox from "../MessageBox/MessageBox";

export default function MobileSingleProduct({ product }: any) {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
  });
  //@ts-ignore
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const history = useHistory();
  return (
    <>
    {loading?(<Loading/>):error?(<MessageBox error={error.message}/>):<div>
      <div className="product w-full bg-white flex flex-col">
        <div
          className={`header w-full bg-white flex px-8 justify-between , ${
            scrolled
              ? "fixed top-0 motion-safe:animate-fade-in-down py-5 z-20"
              : ""
          }`}
        >
          <ChevronRightIcon
            className="block w-12 h-12 md:w-16 md:h-16"
            aria-hidden="true"
            onClick={() => history.goBack()}
          />
          <HeartIcon className="block w-12 h-12" aria-hidden="true" />
        </div>
        <div className="w-full flex flex-col space-y-3 divide-y divide-gray-400 divide-opacity-50">
          <figure className="w-full flex justify-center">
            <img src={product.image} alt={product.name} />
          </figure>

          <div className="w-full flex flex-col px-6 space-y-5">
            <div className="brand flex justify-between items-center ">
              <span className="text-gray-500 text-2xl">{product.brandFa}</span>
              <Rating numReviews={product.numReviews} rating={product.rating} />
            </div>
            <span className="text-gray-700 text-2xl">{product.name}</span>
            <div className="price w-full text-left">
              <span className="w-full  text-2xl">
                {Humanize.intComma(product.price)} تومان
              </span>
            </div>
            <div className="w-1/2 h-24 mx-auto hidden md:block">
              <div className="flex justify-center items-center bg-pink-500 hover:bg-pink-900 text-white-900 font-semibold hover:text-white py-2 px-4 ">
                <span className=" w-auto ">
                  <ShoppingBagIcon
                    className="text-white block w-12 h-12"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-xl text-white mr-3">
                  افزودن به سبد خرید
                </span>
              </div>
            </div>
          </div>
          <div className="collapse w-full  collapse-arrow">
            <input type="checkbox" />
            <p className="collapse-title text-gray-400 text-xl sm:text-2xl md:text-3xl leading-normal px-5 collapse-arrow bg-white text-justify">
              مشخصات فنی
            </p>
            <div className="collapse-content bg-white mb-20">
              <p className="text-base sm:text-xl md:text-2xl leading-normal text-gray-400 px-5 text-justify">
                صرف زمان های طولانی برای انجام سفرهای درون شهری و خرید نیازهای
                روزانه معنای خود را از دست می دهد. آنچه در فرصت اوقات فراغت برای
                افراد در اولویت قرار می گیرد، تفریح، آموزش، ورزش،
              </p>
            </div>
          </div>
          <div className="comment w-full flex flex-col px-6">
            <div className="w-full flex justify-between items-center my-5">
              <span className="text-xl sm:text-2xl md:text-3xl text-gray-700">
                نظرات کاربران
              </span>
              <Link
                to={(location) => ({
                  ...location,
                  pathname: `/category/${product.category}`,
                })}
                className="text-2xl  md:text-3xl text-pelorous"
              >
                مشاهده همه
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Advantage />
          </div>
          <div className="full flex flex-col">
            <div className="w-full flex justify-between items-center my-5 px-6">
              <span className="text-xl sm:text-2xl md:text-3xl text-gray-700">
                پیشنهادات مشابه
              </span>
            </div>
            <div className="w-full">
              <CardCarousel products={products} />
            </div>
          </div>
        </div>
        <div className="z-50 bg-pink-500 text-2xl flex justify-center items-center sm:hidden fixed bottom-0 w-full h-24">
          <span className=" w-auto ">
            <ShoppingBagIcon
              className="text-white block w-12 h-12"
              aria-hidden="true"
            />
          </span>
          <span className="text-xl text-white mr-3">افزودن به سبد خرید</span>
        </div>
      </div>
    </div>}
    </>
  );
}