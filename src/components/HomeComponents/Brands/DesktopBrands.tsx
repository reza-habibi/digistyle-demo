import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { data } from "../../../data";
import { TProducts } from "../../../type.ds";
import Humanize from "humanize-plus";

function DesktopBrands() {
  const [brand, setBrand] = useState<TProducts[]>(data.products);

  return (
    <div className="w-full relative h-auto flex flex-col justify-between">
      <div className="w-10/12 mx-auto flex justify-between items-center mb-5">
        <span className="text-gray-900 text-4xl">
          محــبوبــــ‌ترینــ بــرنــدها
        </span>
        <span className="flex ">
          <span className="text-gray-700 text-2xl">مشاهده همه برندها</span>
          <FaArrowLeft className="text-gray-700 mr-3" />
        </span>
      </div>
      <div className="relative">
        <div className="w-full bg-gray-400 h-64 absolute top-0"></div>
        <div className="w-10/12 mx-auto cards grid grid-cols-4 ">
          <div className="h-full flex flex-col items-center z-10">
            <figure className="my-12">
              <img src="../images/brands/adidas.png" alt="adidas-brand" />
            </figure>
            <span className="flex ">
              <span className="text-gray-700 text-3xl">مشاهده همه برندها</span>
              <FaArrowLeft className="text-gray-700 mr-3" />
            </span>
          </div>
          {brand
            .filter((item: TProducts) => item.brand === "Adidas")
            .map((product: TProducts) => (
              <div
                key={product._id}
                className="bg-white shadow-lg h-100 py-2 mb-3 mx-5"
              >
                <div className="w-full relative product-card">
                  <div className="bg-white  h-100 p-2  mb-3">
                    <figure className="mb-2">
                      <Link to={`/product/${product._id}`}>
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
                    <div className="w-full text-center p-2 bg-white flex flex-col items-center mb-3">
                      <div>
                        <Link to={`/product/${product._id}`}>
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
                        <div className="card-actions flex-col bg-white lg: rounded-xl  items-center justify-center shadow-2xl absolute lg:left-20 left-5 lg:hidden lg:top-28 top-5 animate-fade-in-right">
                          <button className="flex justify-center items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </button>
                          <button className="rounded-full flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </button>
                          <button className="rounded-full hidden md:flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DesktopBrands;
