import Carousel from "../components/HomeComponents/MobileCarousel/MobileBannerCarousel";
import CardCarousel from "../components/HomeComponents/CardCarousel/CardCarousel";
import ProductCategoryCard from "../components/HomeComponents/ProductCategoryCard/ProductCategoryCard";
import MobileCategoryHomeSection from "../components/HomeComponents/ProductCategoryCard/MobileCategoryHomeSection";
import CountDown from "../components/CountDown/CountDown";
import Advantage from "../components/HomeComponents/Advantage/Advantage";
import Brands from "../components/HomeComponents/Brands/Brands";
import { Link } from "react-router-dom";
import { Categories } from "../data";
import DesktopCarousel from "../components/HomeComponents/DesktopMainCarousel/DesktopCarousel";
export default function HomeScreen() {
  return (
    <div className=" mx-auto flex flex-col	 items-center min-h-screen">
      <Carousel />
      <DesktopCarousel/>
      <div className="w-full lg:w-11/12 bg-white rounded-lg px-10 flex flex-wrap items-start my-5">
        <figure>
          <img src="" alt="" />
        </figure>
        <CardCarousel />
      </div>

      <div className="w-full lg:w-11/12 bg-white rounded-lg sm:px-10 flex flex-wrap items-start pt-6 my-5">
        <ProductCategoryCard />
        <MobileCategoryHomeSection />
      </div>

      <div className="w-full lg:w-11/12 bg-white rounded-lg px-10 flex flex-wrap items-start my-1">
        <div className="  mt-5 w-full">
          <h2 className="text-gray-700 mb-3 pb-5 font-bold border-b border-red-700">
            {" "}
            جدید ترین محصولات
          </h2>
          <CountDown />
        </div>
        <CardCarousel />
      </div>

      <div className="w-full md:hidden bg-white rounded-lg px-10 flex flex-wrap items-start pt-6 my-5">
        <Advantage />
      </div>

      <div className="w-full lg:w-11/12 bg-white rounded-lg px-10 flex flex-wrap items-start my-5">
        <div className="  mt-5 w-full">
          <h2 className="text-gray-700 mb-3 pb-5 font-bold border-b border-red-700">
            {" "}
            پرفروش ترین محصولات
          </h2>
        </div>
        <CardCarousel />
      </div>

      <div className="w-full md:hidden bg-white md:rounded-lg flex flex-wrap my-5">
        <div className=" w-full flex justify-between items-center px-10  my-5">
          <span className="text-lg text-gray-700">برندهای برتر</span>
          <Link to="/brands" className="text-xl text-pelorous">
            مشاهده همه
          </Link>
        </div>
        <Brands />
      </div>

      <div className="w-full  hidden md:block bg-white rounded-lg sm:px-10 flex flex-wrap items-start pt-6 my-5">
        <Advantage />
      </div>

      <div className=" w-full bg-white mt-10 hidden lg:block">
        <div className="container grid grid-cols-12">
          {Categories.map((category: any, index: number) => (
            <div
              key={index}
              className="col-span-6 mt-5 text-center md:text-right md:col-span-3"
            >
              <Link
                to={category.URL}
                className="mb-2 text-3xl text-gray-800 font-bold"
              >
                {category.name}
              </Link>
              <ul className="flex flex-col">
                {category.subCategory.map((sub: any, index: number) => (
                  <li key={index} className="my-1 group ">
                    <Link
                      to={sub.url}
                      className="text-gray-600 pb-1 hover:border-b border-gray-900"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
