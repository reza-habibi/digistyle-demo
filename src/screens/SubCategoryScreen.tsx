import React from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Product/Product";
import { Categories, data } from "../data";

function SubCategory() {
  const location = useLocation();
  const currentCategory = Categories.map((item: any) =>
    item.subCategory.find((item: any) => item.url === location.pathname)
  ).find((item: any) => item.url === location.pathname);
  console.log(currentCategory);
  return (
    <div className="grid 2xs:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2  gap-4 mt-10 mx-16">
      {data.products
        .filter((item: any) => item.categoryEn === currentCategory.nameEn)
        .map((product: any, index: number) => (
          <Product key={index} product={product} />
        ))}
    </div>
  );
}

export default SubCategory;
