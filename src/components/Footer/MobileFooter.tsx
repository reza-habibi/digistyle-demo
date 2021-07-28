// import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="py-6 bg-white text-coolGray-900 border-t border-grey-400">
      <div className=" space-y-3 divide-y divide-gray-400 divide-opacity-50">
        <div className="grid grid-cols-7 px-6">
          <span className="col-span-5 text-xl text-gray-400">
            ما را در شبکه های اجتماعی دنبال کنید .
          </span>
          <FaTelegramPlane className="text-gray-400" />
          <FaInstagram className="text-gray-400" />
        </div>
        <div className="grid grid-cols-2 w-full mt-5">
          <ul className="list-none text-center">
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                پشتیبانی مشتریان
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                سوالات متداول
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                دانلود اپلیکیشن
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                بازگردانی کالا
              </Link>
            </li>
          </ul>
          <ul className="list-none text-center">
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                شرایط استفاده
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                حریم خصوصی
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                درباره ما
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={"/"} className="text-gray-400 text-xl">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse w-full  collapse-arrow">
          <input type="checkbox" />
          <p className="collapse-title text-gray-400 text-base px-5 collapse-arrow bg-white">
            توسعه اینترنت روشهای خرید ما را به کلی دگرگون کرده است. منافع موجود
            در خرید اینترنتی هر روز، تعداد بیشتری از مردم را به تجربه آن و ایجاد
            تغییر در الگوهای متداول خرید ترغیب می کند. بعد از تجربه دیجی کالا،
            خرید اینترنتی بیشتر با سرعت زندگی مدرن همگام شد و توانست خود را با
            روحیات و نیازهای رو به رشد مشتریان هماهنگ کند. در حالیکه مشغله های
            روزانه فرصت لذت بردن از اوقات فراغت را کاهش داده است،{" "}
          </p>
          <div className="collapse-content bg-white mb-20">
            <p className="text-base text-gray-400 px-5">
              صرف زمان های طولانی برای انجام سفرهای درون شهری و خرید نیازهای
              روزانه معنای خود را از دست می دهد. آنچه در فرصت اوقات فراغت برای
              افراد در اولویت قرار می گیرد، تفریح، آموزش، ورزش، لذت بردن از
              علایق شخصی و رفع خستگی‏‏های روزانه است. همه این عوامل افراد را
              مجاب به استفاده از روش های نوین مانند مراجعه به یک فروشگاه
              اینترنتی در کمترین زمان برای انجام فعالیت هایی وقت گیر گذشته می
              کند، تا قبل از دیجی‌استایل فرآیند استقبال مشتریان از دیجی کالا
              ثابت کرد این روش از زندگی مورد علاقه طیف عظیمی از افراد است
            </p>
          </div>
        </div>
        <div className="w-full ">
          <span className="text-lg text-gray-400 w-full text-center block mt-5">
            کلیه حقوقو این وبسایت متعلق به
          </span>
          <span className="text-lg text-gray-400 w-full text-center block">
            <a href="http://mrhabibi.ir" target="_blank">محمدرضا حبیبی </a>
            می باشد و به هیچکسم مربوطی نیست .
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
