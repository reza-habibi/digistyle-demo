import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const mainCategory = [
  {
    name: "مردانه",
    category: "men",
  },
  { name: "زنانه", category: "Women" },
  { name: "بچگانه", category: "Kids" },
  { name: "زیبایی و سلامت", category: "Beauty&Health" },
];

function ProductCategoryCard() {
  return (
    <Tabs>
      <TabList>
        {mainCategory.map((item, index) => (
          <Tab key={index}>{item.name}</Tab>
        ))}
      </TabList>
      <TabPanel>
        <div className="grid grid-cols-3 gap-4 mb-2 pb-2">
          <div className="col-span-3 group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center  transform 	origin-center	"
                src="./images/product-category/category-men-clothes.jpg"
                alt="category-men-clothes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              لباس مردانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-men-shoes.jpg"
                alt="category-men-shoes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              کفش مردانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-men-accessories.jpg"
                alt="category-men-accessories"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500  absolute bottom-0 p-3">
              اکسسوری مردانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-men-sports.jpg"
                alt="category-men-sports"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              ورزشی مردانه
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-3 gap-4 mb-2 pb-2">
          <div className="col-span-3 group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center  transform 	origin-center	"
                src="./images/product-category/category-women-clothes.jpg"
                alt="category-women-clothes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              لباس زنانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-women-shoes.jpg"
                alt="category-women-shoes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              کفش زنانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-women-accessories.jpg"
                alt="category-women-accessories"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500  absolute bottom-0 p-3">
              اکسسوری زنانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-women-sports.jpg"
                alt="category-women-sports"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              ورزشی زنانه
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-2 gap-4 mb-2 pb-2">
          <div className="col-span-2 group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center  transform 	origin-center	"
                src="./images/product-category/category-baby-clothes.jpg"
                alt="category-baby-clothes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              لباس بچگانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-girl-clothes.jpg"
                alt="category-girl-clothes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              لباس دخترانه
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-boy-clothes.jpg"
                alt="category-boy-clothes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500  absolute bottom-0 p-3">
              لباس پسرانه
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-4 gap-4 mb-2 pb-2">
          <div className="col-span-4 group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center  transform 	origin-center	"
                src="./images/product-category/category-beauty.jpg"
                alt="category-women-clothes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              لوازم آرایشی
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-personal-care.jpg"
                alt="category-women-shoes"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              لوازم بهداشتی
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-personal-electrical-care.jpg"
                alt="category-women-accessories"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500  absolute bottom-0 p-3">
              لوازم شخصی برقی
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-perfume-all.jpg"
                alt="category-women-sports"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              عطر
            </span>
          </div>
          <div className="group h-auto relative">
            <figure className="overflow-hidden w-full">
              <img
                className="group-hover:scale-110 transition-all duration-500  transform 	origin-center "
                src="./images/product-category/category-health-care.jpg"
                alt="category-women-sports"
              />
            </figure>
            <span className="bg-white text-3xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
              ابزار سلامت
            </span>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default ProductCategoryCard;
