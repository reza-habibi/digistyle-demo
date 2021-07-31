import React from "react";
import { Link } from "react-router-dom";
function CategoryBanner({category}:any) {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto flex justify-evenly hidden lg:block">
        <div className="  flex flex-col ">
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-accessories`}
            className="w-full mb-8"
          >
            <figure>
              <img
                src={`/images/category-banner/${category.nameEn}-accessories.jpg`}
                alt={`${category.nameEn}-accessories`}
              />
            </figure>
          </Link>
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-sport`}
            className="w-full"
          >
            <figure>
              <img
                src={`/images/category-banner/${category.nameEn}-sport-clothing.jpg`}
                alt={`${category.nameEn}-sport-clothing`}
              />
            </figure>
          </Link>
        </div>

        <div className="  flex flex-col">
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-clothing`}
            className="w-full mb-8"
          >
            <figure>
              <img
                src={`/images/category-banner/${category.nameEn}-shirts.jpg`}
                alt={`${category.nameEn}-shirts`}
              />
            </figure>
          </Link>
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-shoes`}
            className="w-full"
          >
            <figure>
              <img
                src={`/images/category-banner/${category.nameEn}-casual-shoes.jpg`}
                alt={`${category.nameEn}-casual-shoes`}
              />
            </figure>
          </Link>
        </div>
      </div>

      <div className="w-full px-5 flex flex-col justify-evenly">
        <div className=" w-full flex mb-8">
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-sport`}
            className="w-full"
          >
            <figure>
              <img
                src={`/images/category-banner/mobile-${category.nameEn}-sport-clothing.jpg`}
                alt={`${category.nameEn}-sport-clothing`}
                className="w-full"
              />
            </figure>
          </Link>
        </div>

        <div className=" w-full flex ">
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-accessories`}
            className="w-full mb-8 ml-8"
          >
            <figure>
              <img
                src={`/images/category-banner/mobile-${category.nameEn}-accessories.jpg`}
                alt={`${category.nameEn}-accessories`}
                className="w-full"

              />
            </figure>
          </Link>
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-shoes`}
            className="w-full"
          >
            <figure>
              <img
                src={`/images/category-banner/mobile-${category.nameEn}-casual-shoes.jpg`}
                alt={`${category.nameEn}-casual-shoes`}
                className="w-full "

              />
            </figure>
          </Link>
        </div>

        <div className=" w-full flex">
          <Link
            to={`/category/${category.nameEn}/${category.nameEn}-clothing`}
            className="w-full mb-8"
          >
            <figure>
              <img
                src={`/images/category-banner/mobile-${category.nameEn}-shirts.jpg`}
                alt={`${category.nameEn}-shirts`}
                className="w-full"
              />
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
