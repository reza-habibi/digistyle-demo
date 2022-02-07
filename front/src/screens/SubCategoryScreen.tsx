import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Product from "../components/Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../redux/actions/productAction";
import Loading from "../components/Loading/Loading";
import MessageBox from "../components/MessageBox/MessageBox";
import { RootState } from "../redux/Store/Store";
import MultiRangeSlider from "../components/RangeSlider/RangeSlider";
import { StarIcon } from "@heroicons/react/solid";
import BrandFilter from "./../components/Filters/BrandFilter";
import RangeFilter from "./../components/Filters/RangeFilter";

function SubCategory(props: any) {
  const history = useHistory();
  const productList = useSelector((state: RootState) => state.productList);
  const { products, loading, error } = productList;
  const [order, setOrder] = useState("newest");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [rate, setRate] = useState(0);

  const [range, setRange] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      listProducts({
        name: "",
        mainCategoryEn: location.pathname.split("/")[2],
        categoryEn: location.pathname.split("/")[3],
        subCategoryEn: location.pathname.split("/")[4]
          ? location.pathname.split("/")[4]
          : "",
        min: min,
        max: max,
        rating: rate,
        order: order,
      })
    );
  }, [dispatch, order, range]);

  const location = useLocation();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row mt-10 ">
          <div className="lg:w-1/5 mr-5 p-5 flex flex-col  justify-start items-center h-full bg-white rounded-xl">
            <div className="w-full mt-10 ">

              <div className="mt-32 flex flex-col">
                <span className="text-gray-900 text-2xl ">
                  فیلتر بر اساس نمرات کاربران :
                </span>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="rating"
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    value={1}
                  />
                  <span className="mr-4">
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="rating"
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    value={2}
                  />
                  <span className="mr-4 flex">
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="rating"
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    value={3}
                  />
                  <span className="mr-4 flex">
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />{" "}
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="rating"
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    value={4}
                  />
                  <span className="mr-4 flex">
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />{" "}
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio w-6 h-6"
                    name="rating"
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    value={5}
                  />
                  <span className="mr-4 flex">
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="block w-8 h-8 text-yellow-500"
                      aria-hidden="true"
                    />{" "}
                  </span>
                </label>
              </div>
              <button
                className=" bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-6 border border-black hover:border-transparent mt-20"
                onClick={() => setRange(!range)}
              >
                اعمال فیلتر
              </button>
            </div>
          </div>
          <div className="lg:w-4/5 flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div className="flex">
                <BrandFilter products={products} />
                <RangeFilter products={products} />
              </div>
              <div className="text-xl mr-10">
                مرتب سازی بر اساس :
                <select
                  className="bg-white text-gray-400 appearance-none border-none inline-block py-3 pl-3 pr-8 mr-3 rounded leading-tight"
                  value={order}
                  onChange={(e) => {
                    setOrder(e.target.value);
                  }}
                >
                  <option value="newest">جدید ترین ها</option>
                  <option value="highest">
                    قیمت : از گران ترین به ارزان ترین
                  </option>
                  <option value="lowest">
                    قیمت : از ارزان ترین به گران ترین
                  </option>
                  <option value="toprated">میانگین نمرات کاربران</option>
                </select>
              </div>
            </div>

            <div className="grid 2xs:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2  gap-4 mt-10 mx-16">
              {products.map((product: any, index: number) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubCategory;
