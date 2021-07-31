import React from "react";
import { Link } from "react-router-dom";
import CategoryAdvantage from "../components/CategoryComponents/CategoryAdvantage/CategoryAdvantage";
import CategoryBanner from "../components/CategoryComponents/CategoryBanner/CategoryBanner";
import CategoryDesktopBannerCarousel from "../components/CategoryComponents/MainCarousel/CategoryBannerCarousel";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import { Categories } from "../data";

function CategoryScreen({ filter }: any) {
  const currentCategory = Categories.find(
    (item: any) => item.nameEn === filter
  );
  return (
    <div className="w-full flex flex-col space-y-16">
      <div className="w-full">
        <CategoryDesktopBannerCarousel category={currentCategory} />
      </div>
      <div className="w-full hidden lg:block">
        <div className="xl:w-1/2 flex justify-between mx-auto ">
          {currentCategory.subCategory.map((item: any, index: number) => (
            <Link to={item.url} key={index}>
              <div className=" ml-8 relative group " key={index}>
                <figure className="w-full  h-auto">
                  <img
                    src={`/images/product-category/category-page/${item.nameEn}.jpg`}
                    alt=""
                  />
                </figure>
                <div className="w-full text-white group-hover:text-black group-hover:bg-white group-hover:bg-opacity-90 transition duration-500 bg-black bg-opacity-50 text-center text-3xl py-5 absolute bottom-0">
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full lg:hidden">
        <div className="xl:w-1/2 flex justify-between mx-auto ">
          {currentCategory.subCategory.map((item: any, index: number) => (
            <Link key={index} to={item.url}>
              <div className="mx-3 flex flex-col justify-center items-center ">
                <figure className="w-full  h-auto ">
                  <img
                    src={`/images/product-category/category-page/${item.nameEn}.jpg`}
                    alt=""
                    className="rounded-full"
                  />
                </figure>
                <span className="w-full text-black text-center text-base sm:text-lg lg:text-xl  py-5">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="full flex flex-col bg-white space-y-10">
        <div className="w-4/5 mx-auto flex justify-between items-center px-6">
          <span className="text-xl text-3xl text-gray-700 pb-3 border-b-2 border-gray-500 border-opacity-50">
            برترین محصولات
          </span>
        </div>
        <div className="w-full px-16">
          <CardCarousel />
        </div>

        <button className="w-64 h-20 mx-auto bg-transparent hover:bg-black text-gray-900 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ">
          مشاهده همه
        </button>
      </div>

      <CategoryBanner category={currentCategory} />

      <div className="full flex flex-col bg-white space-y-10">
        <div className="w-4/5 mx-auto flex justify-between items-center px-6">
          <span className="text-xl text-3xl text-gray-700 pb-3 border-b-2 border-gray-500 border-opacity-50">
            جدیدترین محصولات
          </span>
        </div>
        <div className="w-full px-16">
          <CardCarousel />
        </div>

        <button className="w-64 h-20 mx-auto bg-transparent hover:bg-black text-gray-900 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ">
          مشاهده همه
        </button>
      </div>

      <div className="w-4/5 mx-auto">
        <CategoryAdvantage />
      </div>
    </div>
  );
}

export default CategoryScreen;
