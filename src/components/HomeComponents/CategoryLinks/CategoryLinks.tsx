import React from "react";
import { Link } from "react-router-dom";
import { Categories } from "../../../data";
function CategoryLinks() {
  return (
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
  );
}

export default CategoryLinks;
