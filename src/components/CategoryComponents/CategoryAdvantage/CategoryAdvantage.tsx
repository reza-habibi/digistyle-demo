import React from "react";

function CategoryAdvantage() {
  return (
    <div className="w-full p-5 grid grid-cols-3 bg-white">
      <div className="flex flex-col justify-center items-center space-y-5">
        <figure>
          <img
            src="../images/svg/express.svg"
            alt="express shipment"
            className="md:w-56 md:h-56"
          />
        </figure>
        <span className="text-base md:text-5xl text-gray-700 mt-5 ">
          {" "}
          تحویل سریع و ارزان
        </span>
        <p className="hidden lg:block w-1/2 mx-auto text-2xl text-gray-500 text-center">
          هزینه ارسال برای سفارشات بالای ۳۰۰ هزار تومان رایگان است.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <figure>
          <img
            src="../images/svg/guarantees.svg"
            alt="guarantees"
            className="md:w-56 md:h-56"
          />
        </figure>
        <span className="text-base md:text-5xl text-black mt-5 ">
          {" "}
          ضمانت بازگشت کالا
        </span>
        <p className="hidden lg:block w-1/2 mx-auto text-2xl text-gray-500 text-center">
          اگر کالا برای شما مناسب نبود تا چهارده روز می توانید آن را تعویض کنید.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <figure>
          <img
            src="../images/svg/original.svg"
            alt="original products"
            className="md:w-56 md:h-56"
          />
        </figure>
        <span className="text-base md:text-5xl text-gray-700 mt-5 ">
          {" "}
          کالای اورجینال
        </span>
        <p className="hidden lg:block w-1/2 mx-auto text-2xl text-gray-500 text-center">
          دیجی‌استایل نماینده رسمی برندهاست، با اطمینان از اورجینال بودن کالا
          خرید کنید.
        </p>
      </div>
    </div>
  );
}

export default CategoryAdvantage;
