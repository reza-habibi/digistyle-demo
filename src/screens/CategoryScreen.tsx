import React from "react";
import CategoryDesktopBannerCarousel from "../components/CategoryComponents/CategoryCarousel/CategoryBannerCarousel";
import { Categories } from "../data";

function CategoryScreen({ filter }: any) {
  const currentCategory = Categories.find(
    (item: any) => item.nameEn === filter
  );
  return (
    <div className="w-full flex flex-col space-y-12">
      <div className="w-full">
        <CategoryDesktopBannerCarousel category={currentCategory} />
      </div>
      <div className="w-full">
        <div className="xl:w-1/2 flex mx-auto ">
          {currentCategory.subCategory.map((item: any, index: number) => (
            <div className="w-full ml-8 relative group" key={index}>
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
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default CategoryScreen;
