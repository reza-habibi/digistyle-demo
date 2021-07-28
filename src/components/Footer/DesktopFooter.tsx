import React from "react";
import { FaTelegramPlane, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function DesktopFooter() {
  return (
    <div className="w-full bg-white hidden lg:block pt-10 h-auto">
      <div className=" space-y-3 divide-y divide-gray-400 divide-opacity-50">
        <div className="log w-full relative mb-9">
          <figure>
            <img
              src="/images/svg/logo.svg"
              alt="footer-logo"
              className="bg-white w-72 absolute -top-8  right-0 px-10 "
            />
          </figure>
        </div>
        <div className="w-full">
          <div className="w-10/12 mx-auto grid grid-cols-4">
            <div className=" w-full mt-8">
              <h3 className="text-gray-900 text-3xl mb-5">خرید</h3>
              <ul className="list-none">
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/women">زنانه</Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/men">مردانه</Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/kids">بچگانه</Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/beauty">زیبایی و سلامت</Link>
                </li>
              </ul>
            </div>

            <div className=" w-full mt-8">
              <h3 className="text-gray-900 text-3xl mb-5">خدمات پاسخ به مشتریان</h3>
              <ul className="list-none">
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/women">پاسخ به پرسش های متداول </Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/men">رویه های بازگرداندن کالا </Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/kids">شرایط استفاده</Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/beauty">حریم خصوصی</Link>
                </li>
              </ul>
            </div>

            <div className=" w-full mt-8">
              <h3 className="text-gray-900 text-3xl mb-5">اطلاعات دیجی ممد</h3>
              <ul className="list-none">
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/women">درباره دیجی ممد</Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/men">تماس با دیجی ممد</Link>
                </li>
                <li className="mb-5 text-gray-500 text-xl">
                  <Link to="/category/kids">همکاری با دیجی ممد</Link>
                </li>
              </ul>
            </div>
            <div className=" w-full mt-8">
                <span className="block text-2xl font-bold text-black">اطلاعات تماس : </span>
                <span className="font-bold text-black" >021-85856969</span>

                <div className="flex justify-between items-center w-full mt-5 text-gray-400 text-4xl">
                    <FaTelegramPlane/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
