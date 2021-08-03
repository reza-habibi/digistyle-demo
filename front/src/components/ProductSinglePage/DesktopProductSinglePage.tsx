import { ShoppingBagIcon } from "@heroicons/react/outline";
import Humanize from "humanize-plus";

import CardCarousel from "../CardCarousel/CardCarousel";
import Advantage from "../Advantage/Advantage";
import ProductFeatureTab from "./ProductFeatureTab/ProductFeatureTab";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productAction";
import Loading from "../Loading/Loading";
import MessageBox from "../MessageBox/MessageBox";
import { useEffect } from "react";
export default function DesktopSingleProduct({ product }: any) {
  //@ts-ignore
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error.message} />
      ) : (
        <div className="space-y-20">
          <div className="product w-4/5 bg-white flex flex-col mx-auto mt-5">
            <div className="w-full grid grid-cols-2 ">
              <div className="w-full flex justify-center">
                <figure>
                  <img src={product.image} alt="" />
                </figure>
              </div>

              <div className="full flex flex-col space-y-8">
                <span className="text-black font-bold text-4xl mt-3">
                  {product.brandFa}
                </span>
                <span className="text-black text-3xl mt-3">{product.name}</span>
                <div className="flex w-full items-end">
                  <span className="text-black text-5xl mt-3">
                    {Humanize.intComma(product.price)}
                  </span>
                  <span className="text-black text-xl mt-3 mr-2">تومان</span>
                </div>
                <div className=" h-24 w-1/2">
                  <div className="flex justify-center items-center bg-pink-500 hover:bg-pink-900 text-white-900 font-semibold hover:text-white py-2 px-4 ">
                    <span className=" w-auto ">
                      <ShoppingBagIcon
                        className="text-white block w-12 h-12"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-xl text-white mr-3">
                      افزودن به سبد خرید
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <Advantage />
                </div>
              </div>
            </div>
          </div>

          <div className="full flex flex-col bg-white">
            <div className="w-full flex justify-between items-center my-5 px-6">
              <span className="text-xl text-3xl text-gray-700 pb-3 border-b-2 border-gray-500 border-opacity-50">
                پیشنهادات مشابه
              </span>
            </div>
            <div className="w-full">
              <CardCarousel products={products} />
            </div>
          </div>

          <div className="w-4/5 mx-auto bg-white mb-32">
            <ProductFeatureTab />
          </div>
        </div>
      )}
    </>
  );
}
