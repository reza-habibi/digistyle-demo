import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Product/Product";
import { Categories } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../redux/actions/productAction";
import Loading from "../components/Loading/Loading";
import MessageBox from "../components/MessageBox/MessageBox";
function SubCategory() {
  //@ts-ignore
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const location = useLocation();
  const currentCategory = Categories.map((item: any) =>
    item.subCategory.find((item: any) => item.url === location.pathname)
  ).find((item: any) => item.url === location.pathname);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <div className="grid 2xs:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2  gap-4 mt-10 mx-16">
          {products
            .filter((item: any) => item.categoryEn === currentCategory.nameEn)
            .map((product: any, index: number) => (
              <Product key={index} product={product} />
            ))}
        </div>
      )}
    </div>
  );
}

export default SubCategory;
