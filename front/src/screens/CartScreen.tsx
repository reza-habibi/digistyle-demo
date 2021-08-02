import React from "react";
import Advantage from "../components/Advantage/Advantage";
import CartItem from "../components/CartComponents/CartItem/CartItem";
import ProgressBar from "../components/CartComponents/ProgressBar/ProgressBar";
import { data } from "../data";
import Humanize from "humanize-plus";
import { TProducts } from "../type.ds";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImWarning } from "react-icons/im";

function CartScreen() {
  const cart = data.products.filter((item: TProducts) => item.brand === "nike");
  const [carts, setCarts] = useState(cart);

  const discount =
    carts.length !== 0
      ? carts
          .filter((item: TProducts) => item.discount)
          .map(
            (item: TProducts) => (item.price * parseInt(item.discount)) / 100
          )
          .reduce((a: number, b: number) => a + b)
      : 0;

  const subPrice =
    carts.length !== 0
      ? carts
          .map((item: TProducts) => item.price)
          .reduce((a: number, b: number) => a + b)
      : 0;

  return (
    <div className="mt-10 flex flex-col space-y-16">
      <ProgressBar />

      {carts.length !== 0 ? (
        <>
          <div className="xl:w-3/4 lg:w-4/5 mx-auto w-full  ">
            <h2 className="text-2xl text-gray-700 mb-5">سبد خرید شما</h2>
            {carts.map((product: any) => (
              <CartItem
                key={product._id}
                product={product}
                carts={carts}
                setCarts={setCarts}
              />
            ))}
          </div>

          <div className="xl:w-3/4 lg:w-4/5 mx-auto w-full bg-white flex h-56 p-5">
            <div className="w-2/3">
              <Advantage />
            </div>
            <div className="flex flex-col justify-between w-1/3 h-full divide-y divide-gray-300">
              <div className="w-full flex flex-col justify-between  h-full py-5">
                <div className="w-full flex justify-between">
                  <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                    جمع کل سفارش
                  </span>
                  <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                    {Humanize.intComma(subPrice)} تومان
                  </span>
                </div>
                {discount ? (
                  <div className="w-full flex justify-between ">
                    <span className="text-red-400 text-base md:text-xl lg:text-2xl">
                      تخفیف شگفت آویز
                    </span>
                    <span className="text-red-400 text-base md:text-xl lg:text-2xl">
                      {Humanize.intComma(discount)} تومان
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex justify-between pt-5">
                <span className="text-black text-base md:text-xl lg:text-2xl text-bold">
                  قیمت نهایی
                </span>
                <span className="text-black text-base md:text-xl lg:text-2xl">
                  {Humanize.intComma(subPrice - discount)} تومان
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-3/4 lg:w-4/5 mx-auto w-full bg-white flex items-center justify-between h-52 px-5">
            <div className="flex items-center w-2/3">
              <ImWarning color={"red"} size={60} className="ml-5" />
              <p className="gray-text-500 text-2xl">
                با توجه به محدود بودن موجودی کالاها، افزودن کالا به سبد خرید به
                معنی رزرو آن نیست. جهت نهایی کردن خرید پیش از اتمام موجودی، همین
                حالا سبد خود را ثبت و خرید را تکمیل کنید.
              </p>
            </div>
            <Link to="/shipping" className="text-center bg-pink-500 text-white text-2xl w-96 py-6" >
              ثبت و مرحله بعد
            </Link>
          </div>
        </>
      ) : (
        <div className="w-full mb-5 flex flex-col justify-center items-center">
          <figure>
            <img
              src="./images/any/empty-basket.png"
              alt="empty basket"
              className="w-40 h-64"
            />
          </figure>
          <span className="text-gray-900 text-2xl mt-20">
            سبد خرید شما خالی است.
          </span>
          <Link
            to="/"
            className="bg-transparent w-64 hover:bg-gray-500 text-gray-700 font-bold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent my-20"
          >
            صفحه اصلی
          </Link>
          <Advantage />
        </div>
      )}
    </div>
  );
}

export default CartScreen;
