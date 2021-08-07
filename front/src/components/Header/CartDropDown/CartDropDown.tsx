import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/Store/Store";
import { XIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import Humanize from "humanize-plus";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cartAction";
import { TCartItem } from "../../../type.ds";

export default function CartDropDown() {
  const cart = useSelector((state: RootState) => state.cart);
  const { cartItems } = cart;
  const [count, setCount] = useState(cartItems.length);

  useEffect(() => {
    setCount(cartItems.length);
  }, [cartItems.length]);

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const discount =
    cartItems.length !== 0
      ? cartItems
          .filter((item: TCartItem) => item.discount)
          .map(
            (item: TCartItem) =>
              ((item.price * parseInt(item.discount)) / 100) * item.qty
          )
          .reduce((a: number, b: number) => a + b)
      : 0;

  const subPrice =
    cartItems.length !== 0
      ? cartItems
          .map((item: TCartItem) => item.price * item.qty)
          .reduce((a: number, b: number) => a + b)
      : 0;
  return (
    <div className="w-full z-50 bg-white shadow-lg rounded-xl divide-y divide-gray-200 h-1/2">
      {cartItems.length === 0 ? (
        <div className="w-full flex flex-col justify-center items-center">
          <figure className="mt-10">
            <img
              src="/images/any/empty-basket.png"
              alt="empty basket"
              className="w-40 h-64"
            />
          </figure>
          <span className="text-gray-900 text-3xl mt-20 font-bold">
            سبد خرید شما خالی است.
          </span>
          <span className="text-gray-400 text-xl mt-10 ">
            شاید این صفحات برای شما جذاب باشد.
          </span>
          <div className="w-full flex justify-between px-12 py-5">
            <Link to="/sale" className="text-pelorous text-xl">
              فروش ویژه
            </Link>
            <Link to="/sale" className="text-pelorous text-xl">
              برند ها
            </Link>
            <Link to="/sale" className="text-pelorous text-xl">
              تماس با ما
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className=" w-full flex justify-between items-center px-10 py-5 ">
            <span className="text-xl  text-gray-700">{count} کالا</span>
            <Link to="/cart" className="flex text-xl text-pelorous">
              <span> مشاهده سبد خرید</span>
              <ChevronLeftIcon className="block w-6 h-6" aria-hidden="true" />
            </Link>
          </div>
          <div className="dropdown-scrollbar w-full px-6 divide-y divide-gray-200 overflow-scroll h-120">
            {cartItems.map((product: TCartItem, index: number) => (
              <div
                key={index}
                className="pt-5 w-full flex flex-col relative space-y-5 "
              >
                <div className="w-full flex items-start">
                  <figure className="w-40 h-40">
                    <img src={product.image} alt={product.name} />
                  </figure>
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className=" flex flex-col space-y-5">
                      <span className="text-lg text-gray-900 font-bold">
                        {product.brand}
                      </span>
                      <span className="text-2xl text-gray-900 font-bold">
                        {product.name}
                      </span>
                      <span className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center absolute top-5 left-5 cursor-pointer">
                        <XIcon
                          className="block h-8 w-8"
                          aria-hidden={true}
                          onClick={() => removeFromCartHandler(product.product)}
                        />
                      </span>
                    </div>
                    <div className="w-full flex justify-between items-center mt-5">
                      <span className="text-gray-700 text-xl">
                        {product.qty} عدد
                      </span>
                      <div className="flex justify-center items-center px-2">
                        <span className="text-gray-900 text-2xl">
                          {Humanize.intComma(product.price)} تومان
                        </span>
                        {product.discount !== "0" && (
                          <span className="text-white gray-900 text-2xl bg-black py-2 px-4 mr-4">
                            %{product.discount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center px-6">
            <div className="w-full flex flex-col justify-between pt-5">
              <span className="text-black text-xl font-bold">
                مبلغ قابل پرداخت :
              </span>
              <span className="text-pink-500 text-3xl font-bold py-5">
                {Humanize.intComma(subPrice - discount)}
                <span className="text-xl mr-2 font-normal">تومان</span>
              </span>
            </div>
            <Link to="/shipping">
              <button className="bg-pink-500 w-52 py-6 text-2xl text-white">
                ثبت سفارش
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
