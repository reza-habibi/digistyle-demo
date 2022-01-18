import React, { FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../redux/actions/userAction";
import { RootState } from "../redux/Store/Store";

export default function SigninScreen(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const redirect = "/";

  const userSignin = useSelector((state: RootState) => state.userSignin);
  //@ts-ignore
  const { userInfo, loading, error } = userSignin;

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div>
      <div>
        <div>
          <section className="text-gray-600 body-font bg-gray-100">
            <div className="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-bold lg:text-7xl text-6xl text-blue-600 text-center md:text-right ">
                  دیجی ممد
                </h1>
                <p className="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium  text-black text-center md:text-right ">
                  با دیجی ممد همیشه شیک پوش باشید .
                </p>
              </div>
              <form
                className="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
                onSubmit={submitHandler}
              >
                <div className="relative mb-4">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل خود را وارد نمایید"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="رمز عبور"
                    className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-blue-600 "
                >
                  ورود{" "}
                </button>
                <p className="text-sm text-blue-500 py-5 text-center">
                  رمز عبور خود را فراموش کرده اید ؟{" "}
                </p>

                {loading && (
                  <div className="flex justify-center items-center h-32">
                    <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
                    <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
                    <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
                  </div>
                )}
                {error && <span className="text-red-400 text-xl">{error}</span>}
                <hr className="my-5" />
                <button className="text-white  border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-green-500 ">
                  <Link to="/register">ساختن اکانت جدید</Link>
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
