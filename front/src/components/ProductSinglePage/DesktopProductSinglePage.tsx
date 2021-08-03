import { MinusIcon, PlusIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import Humanize from "humanize-plus";

import CardCarousel from "../CardCarousel/CardCarousel";
import Advantage from "../Advantage/Advantage";
import ProductFeatureTab from "./ProductFeatureTab/ProductFeatureTab";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productAction";
import Loading from "../Loading/Loading";
import MessageBox from "../MessageBox/MessageBox";
import { useEffect } from "react";
import { addToCart } from "../../redux/actions/cartAction";
export default function DesktopSingleProduct({ product, qty, setQty }: any) {
  //@ts-ignore
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    setQty(0)
  }, [dispatch, setQty]);

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    setQty(qty - 1);
  };

  const productId =product._id

  useEffect(() => {
    dispatch(addToCart(productId , qty))

  }, [dispatch, productId, qty])
   
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

                <div className="w-full py-2 flex items-center ">
                  <span className="text-2xl text-gray-900 ml-5">تعداد : </span>
                  <button
                    className={`${
                      qty === product.countInStock ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded":"opacity-100 text-white bg-indigo-500 w-12 h-12 rounded"
                    }`}
                    onClick={increaseQty}
                    disabled={qty === product.countInStock ? true : false}
                  >
                    <PlusIcon
                      className="block w-8 h-8 mx-auto"
                      aria-hidden={true}
                    />
                  </button>
                  <span className="m-5" x-text="count">
                    {qty}
                  </span>
                  <button
                    className={`${
                      qty === 0 ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded":"opacity-100 text-white bg-indigo-500 w-12 h-12 rounded"
                    }`}
                    onClick={decreaseQty}
                    disabled={qty === 0 ? true : false}
                  >
                    <MinusIcon
                      className="block w-8 h-8 mx-auto"
                      aria-hidden={true}
                    />
                  </button>
                </div>
                {product.countInStock > 0 && (
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
                )}
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
