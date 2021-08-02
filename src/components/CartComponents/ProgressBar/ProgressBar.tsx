import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProgressBar() {
  const location = useLocation();
  return (
    <div className="w-full md:w-2/3 mx-auto flex justify-center items-center ">
      <Link to="/cart">
        <figure className="border-4 border-blue-400 rounded-full flex justify-center items-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <img
            src="/images/svg/cart-icon.svg"
            alt="cart"
            className="w-2/3 h-2/3"
          />
        </figure>
      </Link>
      <div
        className={`${
          location.pathname === "/cart"
            ? "bg-gradient-to-l from-blue-400 to-gray-300"
            : "bg-blue-400"
        } h-2 w-16 md:w-40 lg:w-72`}
      ></div>
      <figure
        className={`border-4 ${
          location.pathname === "/shipping"
            ? "border-blue-400"
            : "border-gray-300"
        } rounded-full flex justify-center items-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32`}
      >
        <img
          src="/images/svg/shipping-icon.svg"
          alt="cart"
          className={`w-2/3 h-2/3 ${
            location.pathname === "/cart" ? "filter grayscale" : ""
          }`}
        />
      </figure>
      <div
        className={`${
          location.pathname === "/shipping"
            ? "bg-gradient-to-l from-blue-400 to-gray-300"
            : location.pathname === "/checkout"
            ? "bg-blue-400"
            : "bg-gray-300"
        } h-2 w-16 md:w-40 lg:w-72`}
      ></div>
      <figure
        className={`border-4 ${
          location.pathname === "/checkout"
            ? "border-blue-400"
            : "border-gray-300"
        } rounded-full flex justify-center items-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32`}
      >
        <img
          src="/images/svg/checkout-icon.svg"
          alt="cart"
          className={`w-2/3 h-2/3 ${
            location.pathname !== "/checkout" ? "filter grayscale" : ""
          }`}
        />
      </figure>
    </div>
  );
}

export default ProgressBar;
