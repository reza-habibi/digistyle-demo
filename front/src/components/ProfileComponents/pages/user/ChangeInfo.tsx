import React, { FormEvent, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../../../../redux/actions/userAction";
import { RootState } from "../../../../redux/Store/Store";
import MessageBox from "../../../MessageBox/MessageBox";
import { updateUserProfile } from "../../../../redux/actions/userAction";
import { USER_UPDATE_PROFILE_RESET } from "../../../../redux/constants/userConstants";

export default function ChangeInfo(props: any) {
  const userDetails = useSelector((state: RootState) => state.userDetails);
  const { loading, error, user } = userDetails;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const userUpdateProfile = useSelector(
    (state: RootState) => state.userUpdateProfile
  );
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setFullName(user.fullName);
      setEmail(user.email);
    }
  }, [dispatch, user, userInfo._id]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("رمز عبور و تکرار آن بایستی یکسان باشند");
    } else {
      dispatch(
        updateUserProfile({ userId: user._id, fullName, email, password })
      );
    }

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
          <div className="floating-input mb-5 relative ">
            <input
              type="password"
              id="password"
              name="password"
              className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
              placeholder=" "
              autoComplete="off"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
            >
              رمز عبور
            </label>
          </div>
          <div className="floating-input mb-5 relative ">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
              placeholder=" "
              autoComplete="off"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
            >
              تکرار رمز عبور
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
