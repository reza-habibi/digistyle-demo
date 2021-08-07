import React from "react";
import { useState } from "react";
import ProgressBar from "../components/CartComponents/ProgressBar/ProgressBar";
import { data } from "../data";
import { TCartItem, TProducts } from "../type.ds";
import Humanize from "humanize-plus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store/Store";
function CheckoutScreen({ address }: any) {
const cart = useSelector((state:RootState) => state.cart)
const {cartItems} = cart
  const discount =
    cartItems.length !== 0
      ? cartItems
          .filter((item: TCartItem) => item.discount)
          .map(
            (item: TCartItem) => (item.price * parseInt(item.discount)) / 100
          )
          .reduce((a: number, b: number) => a + b)
      : 0;

  const subPrice =
    cartItems.length !== 0
      ? cartItems
          .map((item: TCartItem) => item.price)
          .reduce((a: number, b: number) => a + b)
      : 0;

  return (
    <div className="w-full space-y-10">
      <ProgressBar />

      <div className="w-full flex flex-col divide divide-gray-200 space-y-10">
        <div className="w-full flex flex-col space-y-10">
          <div className="w-full lg:w-4/5 mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8">
            <div className="w-full bg-white flex flex-col justify-between lg:border lg:border-gray-300  space-y-10  py-10">
              <div className="w-4/5 mx-auto bg-gray-50">
                <p className="w-full h-auto text-justify p-2 leading-relaxed ">
                  این سفارش در بازه ساعت ۹ تا ۲۱ تاریخ چهار‌شنبه ۱۳ مرداد ۱۴۰۰
                  به &nbsp;
                  {address.name} به آدرس {address.address} و شماره تماس{" "}
                  {address.mobile} تحویل می‌گردد.{" "}
                </p>
              </div>

              <div className="coupon w-4/5 h-full mx-auto flex flex-col  space-y-10 ">
                <div className="w-1/2 floating-input mb-5 relative ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-gray-500 top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                  >
                    کارت هدیه
                  </label>
                </div>
                <div className="w-1/2 floating-input mb-5 relative ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-gray-500 top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                  >
                    کد تخفیف
                  </label>
                </div>
              </div>
              <div className="flex flex-col justify-between w-4/5 mx-auto h-full divide-y divide-gray-300">
                <div className="w-full flex flex-col justify-between  h-full py-5 space-y-5">
                  <div className="w-full flex justify-between">
                    <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                      مبلغ کل خرید
                    </span>
                    <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                      {Humanize.intComma(subPrice)} تومان
                    </span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                      هزینه ارسال و بسته‌بندی
                    </span>
                    <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                      رایگان
                    </span>
                  </div>
                  {discount ? (
                    <div className="w-full flex justify-between ">
                      <span className="text-pink-500 font-bold text-base md:text-xl lg:text-2xl">
                        مجموع تخفیف‌ها
                      </span>
                      <span className="text-pink-500 font-bold text-base md:text-xl lg:text-2xl">
                        {Humanize.intComma(discount)} تومان
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="w-full flex justify-between pt-5">
                  <span className="text-black font-bold text-base md:text-xl lg:text-2xl text-bold">
                    قابل پرداخت
                  </span>
                  <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                    {Humanize.intComma(subPrice - discount)} تومان
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-white flex flex-col justify-between lg:border lg:border-gray-300  space-y-10  py-10">
              <div className="w-4/5 mx-auto">
                <h2>انتخاب شیوه‌ی پرداخت</h2>
              </div>

              <div className="w-4/5 mx-auto h-full flex flex-col justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="accountType"
                    value="بلی"
                  />
                  <span className="mr-4">درگاه پرداخت اینترنتی </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="accountType"
                    value="خیر"
                  />
                  <span className="mr-4">پرداخت در محل </span>
                </label>
              </div>

              <div className="w-4/5 mx-auto alert alert-warning">
                <div className="flex-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 mx-2 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                  <label className="text-2xl"> 
                    برای کاستن از احتمال انتقال ویروس کرونا پیشنهاد می‌کنیم از
                    شیوه پرداخت اینترنتی استفاده کنید.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/5 mx-auto flex justify-between items-center bg-white h-32 px-2">
            <span className="text-black">
              با انتخاب دکمه پرداخت و تکمیل خرید، موافقت خود را با شرایط و
              قوانین مربوط به ثبت و رویه‌های پردازش سفارشات دیجی‌استایل اعلام
              نموده‌اید.
            </span>
            <Link
              to="/shipping"
              className="text-center bg-pink-500 text-white text-2xl w-96 py-6"
            >
              پرداخت و تکمیل خرید
            </Link>
          </div>
        </div>

        <div className="w-full bg-white py-10">
          <div className="w-4/5 mx-auto flex flex-col">
            <span className="font-bold text-4xl mb-10">سفارش شما </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {cartItems.map((item) => (
                <div key={item.product} className="w-full flex border border-gray-100 px-2 py-4">
                  <figure className="w-44 h-44">
                    <img src={item.image} alt={item.name} />
                  </figure>
                  <div className="flex flex-col space-y-3">
                    <span className="text-gray-900 font-bold sm:text-2xl xl:text-3xl">
                      {item.brandFa}
                    </span>
                    <span className="text-gray-900 font-bold sm:text-xl xl:text-2xl">
                      {item.name}
                    </span>
                    <span className="text-gray-500 text-lg sm:text-xl">
                      تعداد : {item.qty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutScreen;
