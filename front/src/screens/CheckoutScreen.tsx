import React, { useEffect, useState } from "react";
import ProgressBar from "../components/CartComponents/ProgressBar/ProgressBar";
import { TCartItem } from "../type.ds";
import Humanize from "humanize-plus";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store/Store";
import { savePaymentMethod } from "../redux/actions/cartAction";
import { createOrder } from "../redux/actions/orderAction";
import { ORDER_CREATE_RESET } from "../redux/constants/orderConstants";
function CheckoutScreen(props: any) {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const orderCreate = useSelector((state: RootState) => state.orderReducer);
  const { loading, success, error, order } = orderCreate;
  //@ts-ignore
  cart.itemsPrice = cart.cartItems.reduce(
    (a: number, c: { qty: number; price: number }) => a + c.qty * c.price,
    0
  );
  //@ts-ignore
  const { cartItems, shippingAddress } = cart;
  cart.discount = cartItems
    .filter((item: TCartItem) => item.discount)
    .map((item: TCartItem) => (item.price * parseInt(item.discount)) / 100)
    .reduce((a: number, b: number) => a + b);
  cart.subPrice = cart.itemsPrice - cart.discount;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = () => {
    dispatch(savePaymentMethod(paymentMethod));
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

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
                  {shippingAddress.fullName} به آدرس {shippingAddress.address} و
                  شماره تماس {shippingAddress.mobile} تحویل می‌گردد.{" "}
                </p>
              </div>

              <div className="coupon w-4/5 h-full mx-auto flex flex-col  space-y-10 ">
                <div className="w-1/2 floating-input mb-5 relative ">
                  <input
                    type="text"
                    id="giftCard"
                    name="giftCard"
                    className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    htmlFor="giftCard"
                    className="absolute text-gray-500 top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                  >
                    کارت هدیه
                  </label>
                </div>
                <div className="w-1/2 floating-input mb-5 relative ">
                  <input
                    type="text"
                    id="discount"
                    name="discount"
                    className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    htmlFor="discount"
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
                      {Humanize.intComma(cart.itemsPrice)} تومان
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
                  {cart.discount ? (
                    <div className="w-full flex justify-between ">
                      <span className="text-pink-500 font-bold text-base md:text-xl lg:text-2xl">
                        مجموع تخفیف‌ها
                      </span>
                      <span className="text-pink-500 font-bold text-base md:text-xl lg:text-2xl">
                        {Humanize.intComma(cart.discount)} تومان
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="w-full flex justify-between pt-5">
                  <span className="text-black font-bold text-base md:text-xl lg:text-2xl text-bold">
                    قابل پرداخت
                  </span>
                  <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                    {Humanize.intComma(cart.subPrice)} تومان
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
                    name="paymentMethod"
                    value="PayPal"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="mr-4">درگاه پرداخت اینترنتی </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="paymentMethod"
                    value="stripe"
                    onChange={(e) => setPaymentMethod(e.target.value)}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
            <button
              onClick={submitHandler}
              className="text-center bg-pink-500 text-white text-2xl w-96 py-6"
            >
              پرداخت و تکمیل خرید
            </button>
            {loading && (
              <div className="flex justify-center items-center h-32">
                <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
                <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
                <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
              </div>
            )}
            {error && <span className="text-red-400 text-xl">{error}</span>}{" "}
          </div>
        </div>

        <div className="w-full bg-white py-10">
          <div className="w-4/5 mx-auto flex flex-col">
            <span className="font-bold text-4xl mb-10">سفارش شما </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.product}
                  className="w-full flex border border-gray-100 px-2 py-4"
                >
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
