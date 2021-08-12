import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store/Store";
import MessageBox from "../../../MessageBox/MessageBox";
import { deleteUser, listUsers } from "../../../../redux/actions/userAction";

export default function DashboardUsers(props: any) {
  const userList = useSelector((state: RootState) => state.userList);
  const { loading, error, users } = userList;
  const dispatch = useDispatch();
  const userDelete = useSelector((state: RootState) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch, successDelete]);

  const deleteHandler = (user: any) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user._id));
    }
  };

  return (
    <div>
      <h1 className="w-5/6 mx-auto text-gray-900 my-5">سفارش های من</h1>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
          <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
          <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
        </div>
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
                          شناسه
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          نام
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          پست الکترونیک
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          ادمین
                        </th>

                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user: any) => (
                        <tr key={user._id}>
                          <td className="px-6 py-4 text-xl whitespace-nowrap">
                            {user._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-gray-900">
                              {user.fullName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-gray-500">
                              {user.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {user.isAdmin ? (
                              <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                بلی
                              </span>
                            ) : (
                              <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                خیر
                              </span>
                            )}
                          </td>
                          <td className="flex flex-col px-12 py-8 whitespace-nowrap text-right text-xl font-medium">
                            <div className="inline-flex">
                              <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                              >
                                ویرایش
                              </button>
                              <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                onClick={() => deleteHandler(user)}
                              >
                                حذف
                              </button>
                            </div>
                            {loadingDelete && (
                              <div className="flex justify-center items-center h-32">
                                <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
                                <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
                                <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
                              </div>
                            )}
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
