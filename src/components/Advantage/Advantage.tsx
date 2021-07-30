import React from "react";
import { useLocation } from "react-router";

function Advantage() {
  const location = useLocation();
  return (
    <div className="w-full p-5 grid grid-cols-3 bg-white">
      <div className="flex flex-col justify-center items-center">
        <figure>
          <img
            src="../images/svg/express.svg"
            alt="express shipment"
            className={`${location.pathname === "/" ? "md:w-32 md:h-32" : ""}`}
          />
        </figure>
        <span
          className={`${
            location.pathname === "/"
              ? "text-base md:text-2xl text-gray-700 mt-5 "
              : "text-base text-gray-700 mt-5"
          }`}
        >
          {" "}
          تحویل سریع و ارزان
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <figure>
          <img
            src="../images/svg/guarantees.svg"
            alt="guarantees"
            className={`${location.pathname === "/" ? "md:w-32 md:h-32" : ""}`}
          />
        </figure>
        <span
          className={`${
            location.pathname === "/"
              ? "text-base md:text-2xl text-gray-700 mt-5 "
              : "text-base text-gray-700 mt-5"
          }`}
        >
          {" "}
          ضمانت بازگشت کالا
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <figure>
          <img
            src="../images/svg/original.svg"
            alt="original products"
            className={`${location.pathname === "/" ? "md:w-32 md:h-32" : ""}`}
          />
        </figure>
        <span
          className={`${
            location.pathname === "/"
              ? "text-base md:text-2xl text-gray-700 mt-5 "
              : "text-base text-gray-700 mt-5"
          }`}
        >
          {" "}
          کالای اورجینال
        </span>
      </div>
    </div>
  );
}

export default Advantage;
