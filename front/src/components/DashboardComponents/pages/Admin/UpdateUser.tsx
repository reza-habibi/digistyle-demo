import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUser } from "../../../../redux/actions/userAction";
import { USER_UPDATE_RESET } from "../../../../redux/constants/userConstants";
import { RootState } from "../../../../redux/Store/Store";
import MessageBox from "../../../MessageBox/MessageBox";

export default function UserUpdate(props: {
  match: { params: { id: any } };
  history: string[];
}) {
  const userId = props.match.params.id;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state: RootState) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state: RootState) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push("/dashboard/users");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setFullName(user.fullName);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, fullName, email, isAdmin }));
    console.log(fullName, email, isAdmin)
  };

  return (
    <div className="w-full">
      <h2 className="text-gray-900 mb-10">تغییر اطلاعت حساب کاربری</h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
          <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
          <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
        </div>
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <form className="w-1/2 space-y-10" onSubmit={submitHandler}>
          <div className="floating-input mb-5 relative ">
            <input
              type="text"
              id="fullName"
              name="fullName"
              className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
              placeholder=" "
              autoComplete="off"
              required
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <label
              htmlFor="fullName"
              className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
            >
              نام و نام خانوادگی
            </label>
          </div>
          <div className="floating-input mb-5 relative ">
            <input
              type="email"
              id="email"
              name="email"
              className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
              placeholder=" "
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label
              htmlFor="email"
              className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
            >
              ایمیل
            </label>
          </div>
          <div>
            <label htmlFor="isAdmin" className="inline-flex items-center mt-3">
              <input
                id="isAdmin"
                type="checkbox"
                className="form-checkbox h-8 w-8 text-pink-500 rounded"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <span className="mr-2 text-gray-700 ">ادمین ؟</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-transparent hover:bg-black text-black font-normal hover:text-white py-4 px-4 border border-black hover:border-transparent "
          >
            تغییر اطلاعات حساب کاربری
          </button>
          {loadingUpdate && (
            <div className="flex justify-center items-center h-32">
              <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
              <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
              <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
