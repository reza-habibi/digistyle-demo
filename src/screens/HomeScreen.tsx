import Carousel from "../components/HomeComponents/MobileCarousel/MobileBannerCarousel";
import CardCarousel from "../components/HomeComponents/CardCarousel/CardCarousel";
import ProductCategoryCard from "../components/HomeComponents/ProductCategoryCard/ProductCategoryCard";
import MobileCategoryHomeSection from "../components/HomeComponents/ProductCategoryCard/MobileCategoryHomeSection";
import CountDown from "../components/CountDown/CountDown";
import Advantage from "../components/HomeComponents/Advantage/Advantage";
import Brands from "../components/HomeComponents/Brands/Brands";
import { Link } from "react-router-dom";
import DesktopCarousel from "../components/HomeComponents/DesktopMainCarousel/DesktopCarousel";
import CategoryLinks from "../components/HomeComponents/CategoryLinks/CategoryLinks";
import DesktopBrands from "../components/HomeComponents/Brands/DesktopBrands";
export default function HomeScreen() {
  return (
    <div className=" mx-auto flex flex-col gap-y-20 items-center min-h-screen">
      <Carousel />
      <DesktopCarousel />
      <div className="w-full grid grid-cols-12 bg-white  px-10 flex flex-wrap items-start ">
        <div className="col-span-2 h-full flex flex-col justify-around items-center">
          <figure>
            <img src="/images/svg/sale.svg" alt="hot-sale" />
          </figure>
          <CountDown />

          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            همه محصولات
          </button>
        </div>
        <div className="col-span-9">
          <CardCarousel />
        </div>
      </div>

      <div className="w-full lg:w-11/12 bg-white rounded-lg sm:px-10 flex flex-wrap items-start pt-6 ">
        <ProductCategoryCard />
        <MobileCategoryHomeSection />
      </div>

      <div className="w-full grid grid-cols-12 bg-white  px-10 flex flex-wrap items-start ">
        <div className="col-span-2  mt-5 w-full flex flex-col items-center justify-around h-full">
          <span className="text-gray-700 text-6xl leading-tight text-center ">
            {" "}
            پربــازدیـد تریـن‌های اخــیــــــــر
          </span>

          <button className="bg-transparent hover:bg-black text-gray-900 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ">
            مشاهده همه
          </button>
        </div>
        <CardCarousel />
      </div>

      <div className="w-full md:hidden bg-white rounded-lg px-10 flex flex-wrap items-start pt-6 ">
        <Advantage />
      </div>

      <div className="w-full flex justify-around items-center h-auto">
        <Link to="/" className="w-2/5">
          <figure>
            <img src="../images/desktop/banner.jpg" alt="banner" />
          </figure>
        </Link>
        <Link to="/" className="w-2/5">
          <figure>
            <img src="../images/desktop/banner2.jpg" alt="banner" />
          </figure>
        </Link>
      </div>

      <div className="w-full grid grid-cols-12 bg-white  px-10 flex flex-wrap items-start ">
        <div className="col-span-2  mt-5 w-full flex flex-col items-center justify-around h-full">
          <span className="text-gray-700 text-6xl leading-tight text-center ">
            {" "}
            پرفـــروش تریـن‌های اخــیــــــــر
          </span>

          <button className="bg-transparent hover:bg-black text-gray-900 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ">
            مشاهده همه
          </button>
        </div>
        <CardCarousel />
      </div>

      <div className="w-full hidden lg:block">
        <DesktopBrands/>
      </div>

      <div className="w-full lg:hidden bg-white md:rounded-lg flex flex-wrap ">
        <div className=" w-full flex justify-between items-center px-10  ">
          <span className="text-xl sm:text-2xl md:text-3xl text-gray-700">
            برندهای برتر
          </span>
          <Link to="/brands" className="text-2xl  md:text-3xl text-pelorous">
            مشاهده همه
          </Link>
        </div>
        <Brands />
      </div>

      <div className=" w-full bg-white mt-10 hidden lg:block">
        <CategoryLinks />

        <div className="w-full  hidden md:block bg-white rounded-lg sm:px-10 flex flex-wrap items-start pt-6 ">
          <Advantage />
        </div>
      </div>
    </div>
  );
}
