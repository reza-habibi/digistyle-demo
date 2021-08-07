import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Advantage from "../components/Advantage/Advantage";
import ProgressBar from "../components/CartComponents/ProgressBar/ProgressBar";
import ShippingModal from "../components/ShippingComponents/ShippingModal/ShippingModal";
import { RootState } from "../redux/Store/Store";

function ShippingScreen() {
  const [open, setOpen] = useState(false);


  const handleModal = () => {
    setOpen(true);
  };

  const cart = useSelector((state:RootState) => state.cart)
  //@ts-ignore
  const {shippingAddress} = cart
  

  return (
    <div className="mt-10 flex flex-col space-y-20 ">
      <ProgressBar />
      <div className="heading xl:w-3/4 lg:w-4/5 w-full px-4 lg:px-0 mx-auto flex justify-between items-center h-auto">
        <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-bold">
          مکان و زمان تحویل سفارش
        </h2>
        <button
          className="bg-transparent text-xl md:text-2xl lg:text-3xl w-40 md:w-60 lg:w-80 hover:bg-gray-500 text-gray-700 font-bold  py-4 border border-gray-500 lg:hover:border-transparent lg:hover:text-white"
          onClick={handleModal}
        >
          افزودن آدرس
        </button>
      </div>
      <div className="lg:w-4/5 w-full mx-auto bg-white">
        {shippingAddress.fullName !== "" ? (
          <div className="md:grid md:grid-cols-6 flex flex-col  ">
            <span className="text-gray-900 border-b border-gray-300 lg:border-none text-2xl font-bold col-span-1 py-8 px-4">
              {shippingAddress.fullName}
            </span>
            <span className="text-gray-900 border-b border-gray-300 lg:border-none text-2xl col-span-4 py-8 px-4">
              آدرس :{" "}
              <span className="text-gray-500">
                {shippingAddress.province} ،{shippingAddress.city} ،{shippingAddress.address}
              </span>
            </span>
            <span className="text-gray-500 border-b border-gray-300 lg:border-none text-2xl py-8 px-4 hidden lg:block">
              تلفن همراه : {shippingAddress.mobile}
            </span>
          </div>
        ) : null}
        <span className="block text-gray-700 text-xl lg:text-2xl py-8 px-4 ">
          هزینه ارسال : <strong>رایگان</strong>{" "}
          <span className="text-gray-400">تحویل اکسپرس دیجی کالا</span>
        </span>
      </div>

      <div className="w-full lg:w-4/5 mx-auto flex justify-between items-center ">
        <div className="flex flex-col w-full lg:w-3/5 lg:flex-row justify-between items-center">
          <span className="text-xl lg:text-2xl text-gray-700">
            آیا مایل هستید به همراه این سفارش فاکتور ارسال شود؟
          </span>
          <div className="lg:w-1/5 w-2/5 mx-auto flex justify-between">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio w-6 h-6"
                name="accountType"
                value="بلی"
              />
              <span className="mr-2">بلی</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio w-6 h-6"
                name="accountType"
                value="خیر"
              />
              <span className="mr-2">خیر</span>
            </label>
          </div>
        </div>
        <Link
          to="/checkout"
          className="hidden lg:block text-center bg-pink-500 text-white text-2xl w-96 py-6"
        >
          ثبت و مرحله بعد
        </Link>
      </div>
      <Advantage />

      <ShippingModal
        open={open}
        setOpen={setOpen}

      />
      <Link
        to="/checkout"
        className="lg:hidden w-full fixed bottom-0 text-center bg-pink-500 text-white text-2xl py-8 z-50"
      >
        ثبت و مرحله بعد
      </Link>
    </div>
  );
}

export default ShippingScreen;
