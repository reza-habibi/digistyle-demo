import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Rating from "../Rating";
import {
  ChevronRightIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import Humanize from "humanize-plus";

import CardCarousel from "../HomeComponents/CardCarousel/CardCarousel";
import Advantage from "../Advantage/Advantage";
import ProductFeatureTab from "./ProductFeatureTab/ProductFeatureTab";

export default function DesktopSingleProduct({ product }: any) {
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
    window.addEventListener("scroll", handleScroll);
  });
  const history = useHistory();
  if (!product) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">متاسفانه </strong>
        <span className="block sm:inline">محصول مورد نظر یافت نشد.</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  }
  return (
    <div className="space-y-20">
      <div className="product w-4/5 bg-white flex flex-col mx-auto mt-5">
        <div className="w-full grid grid-cols-2 ">
          <div className="w-full flex justify-center">
            <figure>
              <img src={product.image} alt="" />
            </figure>
          </div>

          <div className="full flex flex-col space-y-8">
            <span className="text-black font-bold text-4xl mt-3">
              {product.brandFa}
            </span>
            <span className="text-black text-3xl mt-3">{product.name}</span>
            <div className="flex w-full items-end">
              <span className="text-black text-5xl mt-3">
                {Humanize.intComma(product.price)}
              </span>
              <span className="text-black text-xl mt-3 mr-2">تومان</span>
            </div>
            <div className=" h-24 w-1/2">
              <div className="flex justify-center items-center bg-pink-500 hover:bg-pink-900 text-white-900 font-semibold hover:text-white py-2 px-4 ">
                <span className=" w-auto ">
                  <ShoppingBagIcon
                    className="text-white block w-12 h-12"
                    aria-label="true"
                  />
                </span>
                <span className="text-xl text-white mr-3">
                  افزودن به سبد خرید
                </span>
              </div>
            </div>
            <div className="w-full">
              <Advantage />
            </div>
          </div>
        </div>
      </div>

      <div className="full flex flex-col bg-white">
        <div className="w-full flex justify-between items-center my-5 px-6">
          <span className="text-xl text-3xl text-gray-700 pb-3 border-b-2 border-gray-500 border-opacity-50">
            پیشنهادات مشابه
          </span>
        </div>
        <div className="w-full">
          <CardCarousel />
        </div>
      </div>

      <div className="w-4/5 mx-auto bg-white">
        <ProductFeatureTab />
      </div>
    </div>
  );
}
