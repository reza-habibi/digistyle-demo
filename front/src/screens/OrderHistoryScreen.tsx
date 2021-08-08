import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import MessageBox from "../components/MessageBox/MessageBox";
import { listOrderMine } from "../redux/actions/orderAction";
import { RootState } from "../redux/Store/Store";
import Humanize from "humanize-plus";

export default function OrderHistoryScreen(props: { history: string[] }) {
  const orderMineList = useSelector((state: RootState) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  console.log(orders);
  return (
    <div>
      <h1 className="w-5/6 mx-auto text-gray-900 my-5">سفارش های من</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <div className="w-5/6 mx-auto my-5">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          شماره سفارش
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          تاریخ ثبت سفارش
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          مبلغ
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          پرداخت شده
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          ارسال شده
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order: any) => (
                        <tr key={order._id}>
                          <td className="px-6 py-4 text-xl whitespace-nowrap">
                            {order._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-gray-900">
                              {order.createdAt.substring(0, 10)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-gray-500">
                              {Humanize.intComma(order.subPrice)} تومان
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order.isPaid ? (
                              <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {order.paidAt.substring(0, 10)}
                              </span>
                            ) : (
                              <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                خیر
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order.isDelivered ? (
                              <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {order.deliveredAt.substring(0, 10)}
                              </span>
                            ) : (
                              <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                خیر
                              </span>
                            )}
                          </td>
                          <td className="px-12 py-8 whitespace-nowrap text-right text-xl font-medium">
                            <button
                              type="button"
                              onClick={() => {
                                props.history.push(`/order/${order._id}`);
                              }}
                            >
                              جزئیات
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
