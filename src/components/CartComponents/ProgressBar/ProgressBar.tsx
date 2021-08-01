import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProgressBar() {
  const location = useLocation();
  return (
    <div className="w-3/5 mx-auto flex justify-center items-center">
      <Link to="/cart">
        <figure className="border-4 border-blue-400 rounded-full">
          <img
            src="/images/svg/cart-icon.svg"
            alt="cart"
            className="px-8 py-6"
          />
        </figure>
      </Link>
      <div className="bg-gradient-to-l from-blue-400 to-gray-300 h-2 w-60 md:w-72 lg:w-96"></div>
      <figure className="border-4 border-gray-300 rounded-full">
        <img
          src="/images/svg/shipping-icon.svg"
          alt="cart"
          className={`px-8 py-6 ${location.pathname==='/cart'?"filter grayscale":""}`}
        />
      </figure>
      <div className="bg-gray-300 h-2 w-60 md:w-72 lg:w-96"></div>
      <figure className="border-4 border-gray-300 rounded-full">
        <img
          src="/images/svg/checkout-icon.svg"
          alt="cart"
          className={`px-8 py-6 ${location.pathname!=='/checkout'?"filter grayscale":""}`}
        />
      </figure>
    </div>
  );
}

export default ProgressBar;
