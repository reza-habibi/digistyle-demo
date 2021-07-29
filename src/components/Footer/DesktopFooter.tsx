import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function DesktopFooter() {
  return (
    <div className="w-full bg-white hidden lg:block pt-10 h-auto">
      <div className="w-11/12 mx-auto">
        <div className=" space-y-3 divide-y divide-gray-400 divide-opacity-50">
          <div className="log w-full relative mb-9">
            <figure>
              <img
                src="/images/svg/logo.svg"
                alt="footer-logo"
                className="bg-white w-64 absolute -top-8  right-0 pl-6 "
              />
            </figure>
          </div>
          <div className="w-full">
            <div className=" grid grid-cols-4">
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
                <h3 className="text-gray-900 text-3xl mb-5">
                  خدمات پاسخ به مشتریان
                </h3>
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
                <h3 className="text-gray-900 text-3xl mb-5">
                  اطلاعات دیجی ممد
                </h3>
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
                <span className="block text-2xl font-bold text-black">
                  اطلاعات تماس :{" "}
                </span>
                <span className="font-bold text-black">021-85856969</span>

                <div className="flex justify-between items-center w-full mt-5 text-gray-400 text-4xl">
                  <FaTelegramPlane />
                  <FaInstagram />
                  <FaTwitter />
                </div>
                <span className="block text-black font-bold text-2xl mt-5 mb-2">
                  ثبت نام در خبرنامه دیجی ممد
                </span>

                <div className="w-full  flex items-center justify-between border border-gray-400">
                  <input
                    type="text"
                    placeholder="ایمیل خود را وارد نمایید"
                    className="bg-transparent focus:outline-none text-white w-11/12 px-3"
                    id="email"
                    aria-label="email"
                  />
                  <div className="p-5 cursor-pointer bg-gray-300 ">
                    <FaArrowLeft />
                  </div>
                </div>
              </div>
            </div>
            <div className=" items-center my-10 grid grid-cols-4">
              <div className="col-span-1">
                <p className="text-3xl text-gray-900">
                  دانلود اپلیکیشن دیجی ‌ممد
                </p>
              </div>
              <div className="col-span-3 flex justify-end">
                <figure className="mr-5">
                  <img
                    src="../images/desktop/app/google-play.png"
                    alt="google-play"
                    className="w-54 h-16"
                  />
                </figure>
                <figure className="mr-5">
                  <img
                    src="../images/desktop/app/bazaar.png"
                    alt="bazaar"
                    className="w-54 h-16"
                  />
                </figure>
                <figure className="mr-5">
                  <img
                    src="../images/desktop/app/myket.png"
                    alt="myket"
                    className="w-54 h-16"
                  />
                </figure>
                <figure className="mr-5">
                  <img
                    src="../images/desktop/app/sib-app.png"
                    alt="sib-app"
                    className="w-54 h-16"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" grid grid-cols-12">
              <div className="collapse col-span-10  collapse-arrow">
                <input type="checkbox" />
                <p className="collapse-title text-gray-800 text-base sm:text-xl md:text-2xl leading-normal px-5 collapse-arrow bg-white text-justify">
                  توسعه اینترنت روشهای خرید ما را به کلی دگرگون کرده است. منافع
                  موجود در خرید اینترنتی هر روز، تعداد بیشتری از مردم را به
                  تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می کند.
                  بعد از تجربه دیجی کالا، خرید اینترنتی بیشتر با سرعت زندگی مدرن
                  همگام شد و توانست خود را با روحیات و نیازهای رو به رشد مشتریان
                  هماهنگ کند. در حالیکه مشغله های روزانه فرصت لذت بردن از اوقات
                  فراغت را کاهش داده است،{" "}
                </p>
                <div className="collapse-content bg-white mb-20">
                  <p className="text-base sm:text-xl md:text-2xl leading-normal text-gray-400 px-5 text-justify">
                    صرف زمان های طولانی برای انجام سفرهای درون شهری و خرید
                    نیازهای روزانه معنای خود را از دست می دهد. آنچه در فرصت
                    اوقات فراغت برای افراد در اولویت قرار می گیرد، تفریح، آموزش،
                    ورزش، لذت بردن از علایق شخصی و رفع خستگی‏‏های روزانه است.
                    همه این عوامل افراد را مجاب به استفاده از روش های نوین مانند
                    مراجعه به یک فروشگاه اینترنتی در کمترین زمان برای انجام
                    فعالیت هایی وقت گیر گذشته می کند، تا قبل از دیجی‌استایل
                    فرآیند استقبال مشتریان از دیجی کالا ثابت کرد این روش از
                    زندگی مورد علاقه طیف عظیمی از افراد است
                  </p>
                </div>
              </div>
              <figure className="flex justify-center items-center col-span-2">
                <img src="../images/desktop/samandehi.png" alt="samandehi" />
              </figure>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-3 my-5">
              <span className="col-span-2 text-2xl text-gray-500">
                کليه حقوق اين سايت متعلق به شرکت نوآوران فن آوازه (فروشگاه
                اینترنتی دیجی‌ ممد) می‌باشد.
              </span>
              <span className="text-gray-500 text-2xl text-left">
                digimamad.com - 2021 © Copyright
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
