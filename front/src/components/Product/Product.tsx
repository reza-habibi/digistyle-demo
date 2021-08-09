import React from "react";
import Humanize from "humanize-plus";
import {
  SearchIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { showDrawer } from "../../redux/actions/drawerAction";
function Product({ product }: any) {
  const dispatch = useDispatch();

  const addToCartHandler = (productId: string) => {
    const qty = 1;
    dispatch(addToCart(productId, qty));
    dispatch(showDrawer());
  };

  return (
    <div
      key={product._id}
      className="bg-white shadow-lg rounded-lg h-100 transform lg:hover:shadow-xl transition duration-300 mb-3"
    >
      <div className="w-full relative product-card">
        <div className="bg-white rounded-lg h-100 mb-3">
          <figure className="mb-2">
            <Link to={`/products/${product._id}`}>
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
          <div className="rounded-lg p-2 bg-white flex flex-col items-center mb-3">
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
            {!product.countInStock && (
              <span className="text-lg text-red-500">
                {" "}
                محصول در انبار موجود نمی باشد{" "}
              </span>
            )}
            <div className="flex justify-center items-center mt-3">
              <div className="lg:text-2xl md:text-xl text-gray-700 font-light">
                {" "}
                {Humanize.intComma(product.price)} تومان
              </div>
              <div className="card-actions flex-col bg-white lg:rounded-lg rounded-xl  items-center justify-center shadow-2xl absolute lg:left-24 left-5 lg:hidden lg:top-24 top-5 animate-fade-in-right">
                <button className="flex justify-center items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-red-500">
                  <HeartIcon className="block h-8 w-8" aria-hidden="true" />
                </button>
                {product.countInStock>0 && (
                  <button
                    className="rounded-full flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-yellow-500"
                    onClick={() => addToCartHandler(product._id)}
                  >
                    <ShoppingCartIcon
                      className="block h-8 w-8"
                      aria-hidden="true"
                    />
                  </button>
                )}
                <button className="rounded-full hidden md:flex justify-center	items-center text-black focus:outline-none p-4 mr-auto transition duration-300 hover:text-green-500">
                  <SearchIcon className="block h-8 w-8" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
