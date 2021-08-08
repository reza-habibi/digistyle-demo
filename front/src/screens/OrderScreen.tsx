import React, { useEffect } from "react";
import Humanize from "humanize-plus";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store/Store";
import { detailsOrder, payOrder } from "../redux/actions/orderAction";
import Loading from "../components/Loading/Loading";
import MessageBox from "../components/MessageBox/MessageBox";
import { useState } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { ORDER_PAY_RESET } from "../redux/constants/orderConstants";

function OrderScreen(props: any) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state: RootState) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state: RootState) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay]);

  const successPaymentHandler = (paymentResult: any) => {
    dispatch(payOrder(order, paymentResult));
  };

  console.log(errorPay)

  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox error={error} />
  ) : (
    <div className="w-full space-y-10">
      <div className="w-full flex flex-col divide divide-gray-200 space-y-10">
        <div className="w-full flex flex-col space-y-10">
          <div className="w-full lg:w-4/5 mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8">
            <div className="w-full bg-white flex flex-col justify-between lg:border lg:border-gray-300  space-y-10  py-10">
              <h2 className="w-4/5 mx-auto text-2xl">سفارش : {order._id}</h2>
              <div className="w-4/5 mx-auto bg-gray-50">
                <p className="w-full h-auto text-justify p-2 leading-relaxed ">
                  این سفارش در بازه ساعت ۹ تا ۲۱ تاریخ چهار‌شنبه ۱۳ مرداد ۱۴۰۰
                  به &nbsp;
                  {order.shippingAddress.fullName} به آدرس{" "}
                  {order.shippingAddress.address} و شماره تماس{" "}
                  {order.shippingAddress.mobile} تحویل می‌گردد.{" "}
                </p>
              </div>

              <div className="flex flex-col justify-between w-4/5 mx-auto h-full divide-y divide-gray-300">
                <div className="w-full flex flex-col justify-between  h-full py-5 space-y-5">
                  <div className="w-full flex justify-between">
                    <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                      مبلغ کل خرید
                    </span>
                    <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                      {Humanize.intComma(order.itemsPrice)} تومان
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
                  {order.discount ? (
                    <div className="w-full flex justify-between ">
                      <span className="text-pink-500 font-bold text-base md:text-xl lg:text-2xl">
                        مجموع تخفیف‌ها
                      </span>
                      <span className="text-pink-500 font-bold text-base md:text-xl lg:text-2xl">
                        {Humanize.intComma(order.discount)} تومان
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="w-full flex justify-between pt-5">
                  <span className="text-black font-bold text-base md:text-xl lg:text-2xl text-bold">
                    قابل پرداخت
                  </span>
                  <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
                    {Humanize.intComma(order.subPrice)} تومان
                  </span>
                </div>
                {!order.isPaid && (
                  <div className="w-full flex justify-between pt-5">
                    {!sdkReady ? (
                      <div className="flex justify-center items-center h-32">
                        <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
                        <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
                        <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
                      </div>
                    ) : (
                      <>
                        {errorPay && (
                          <span className="text-red-500 text-xl">
                            {errorPay}
                          </span>
                        )}
                        {loadingPay && (
                          <div className="flex justify-center items-center h-32">
                            <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
                            <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
                            <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
                          </div>
                        )}
                        <PayPalButton
                          amount={order.subPrice}
                          onSuccess={successPaymentHandler}
                        />
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full bg-white flex flex-col space-y-5 lg:border lg:border-gray-300  space-y-10  py-10">
              <div className="w-4/5 mx-auto"></div>

              <div className="w-4/5 mx-auto flex ">
                نحوه پرداخت : {order.paymentMethod}
              </div>

              {order.isPaid ? (
                <div className="w-4/5 mx-auto h-full flex flex-col justify-between text-green-500">
                  پرداخت شده در : {order.paidAt}
                </div>
              ) : (
                <div className="w-4/5 mx-auto h-full flex flex-col justify-between text-red-500">
                  پرداخت نشده است
                </div>
              )}

              {order.isDelivered ? (
                <div className="w-4/5 mx-auto h-full flex flex-col justify-between text-green-500">
                  ارسال شده در : {order.deliveredAt}
                </div>
              ) : (
                <div className="w-4/5 mx-auto h-full flex flex-col justify-between text-red-500">
                  ارسال نشده است
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-10">
        <div className="w-4/5 mx-auto flex flex-col">
          <span className="font-bold text-4xl mb-10">سفارش شما </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {order.orderItems.map((item: any) => (
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
  );
}

export default OrderScreen;
