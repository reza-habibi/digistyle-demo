import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { data } from "../../../data";
import { TProducts } from "../../../type.ds";
import Humanize from "humanize-plus";
import {
  SearchIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/outline";

function DesktopBrands({ brandFilter, direction }: any) {
  const [brand, setBrand] = useState<TProducts[]>(data.products);

  return (
    <div className="w-full relative h-auto flex flex-col justify-between mb-16">
      <div className="relative">
        <div className="w-full bg-gray-400 h-64 absolute top-0"></div>
        <div
          className={`w-10/12 mx-auto cards flex ${
            direction === "left" ? "flex-row-reverse" : ""
          }`}
        >
          <div className="h-full flex-1 flex flex-col items-center z-10">
            <figure className="my-12">
              <img
                src={`../images/brands/${brandFilter}.png`}
                alt="adidas-brand"
              />
            </figure>
            <span className="flex ">
              <span className="text-gray-700 text-3xl">مشاهده همه برندها</span>
              <FaArrowLeft className="text-gray-700 mr-3" />
            </span>
          </div>
          {brand
            .filter((item: TProducts) => item.brand === brandFilter)
            .map((product: TProducts) => (
              <div
                key={product._id}
                className="bg-white flex-1 shadow-lg h-100 py-2 mb-3 mx-5"
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
                          <button className="flex justify-center items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-red-500">
                            <HeartIcon
                              className="block h-8 w-8"
                              aria-hidden="true"
                            />
                          </button>
                          <button className="rounded-full flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-yellow-500">
                            <ShoppingCartIcon
                              className="block h-8 w-8"
                              aria-hidden="true"
                            />
                          </button>
                          <button className="rounded-full hidden md:flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-green-500">
                            <SearchIcon
                              className="block h-8 w-8"
                              aria-hidden="true"
                            />
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
