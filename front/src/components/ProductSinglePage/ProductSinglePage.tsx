import {
  ChevronRightIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import Humanize from "humanize-plus";

import CardCarousel from "../CardCarousel/CardCarousel";
import Advantage from "../Advantage/Advantage";
import ProductFeatureTab from "./ProductFeatureTab/ProductFeatureTab";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productAction";
import Loading from "../Loading/Loading";
import MessageBox from "../MessageBox/MessageBox";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/actions/cartAction";
import { RootState } from "../../redux/Store/Store";
import { Link, useHistory } from "react-router-dom";
import { showDrawer } from "../../redux/actions/drawerAction";
export default function DesktopSingleProduct({ product }: any) {
  const [scrolled, setScrolled] = useState(false);
  const [qty, setQty] = useState(1);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
  });

  const history = useHistory();

  const productList = useSelector((state: RootState) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    if (product.countInStock > 0) {
      setQty(1);
    }else{
      setQty(0)
    }
  }, [dispatch, product.countInStock, setQty]);

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    setQty(qty - 1);
  };

  const productId = product._id;

  const addToCartHandler = () => {
    dispatch(addToCart(productId, qty));
    dispatch(showDrawer());
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <div>
          <div
            className={`header lg:hidden w-full bg-white flex px-8 justify-between , ${
              scrolled
                ? "fixed top-0 motion-safe:animate-fade-in-down py-5 z-20"
                : ""
            }`}
          >
            <ChevronRightIcon
              className="block w-12 h-12 md:w-16 md:h-16"
              aria-hidden="true"
              onClick={() => history.goBack()}
            />
            <HeartIcon className="block w-12 h-12" aria-hidden="true" />
          </div>
          <div className="space-y-20">
            <div className="product lg:w-4/5 bg-white flex flex-col lg:mt-5 mx-auto">
              <div className="w-full lg:grid lg:grid-cols-2 flex flex-col space-y-3 divide-y divide-gray-400 divide-opacity-50 lg:divide-y-0">
                <div className="w-full flex justify-center">
                  <figure>
                    <img src={product.image} alt={product.name} />
                  </figure>
                </div>

                <div className="full flex flex-col px-6 space-y-8">
                  <span className="text-black font-bold text-4xl mt-3">
                    {product.brandFa}
                  </span>
                  <span className="text-black text-3xl mt-3">
                    {product.name}
                  </span>
                  {product.discount !== "0" ? (
                    <div className="grid grid-cols-2 w-full">
                      <div className="w-full flex justify-start items-center">
                        <div className="bg-pink-500 lg:bg-black h-16 px-4 flex items-center">
                          <span className="text-white text-2xl">تخفیف :</span>
                          <span className="text-white text-2xl">
                            {Humanize.intComma(
                              (product.price * parseInt(product.discount)) / 100
                            )}
                          </span>
                          <span className="text-white text-2xl">تومان</span>
                        </div>
                        <div className="w-11 hidden lg:block overflow-hidden inline-block ">
                          <div className=" h-16  bg-black -rotate-45 transform origin-top-right"></div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full items-end justify-end">
                        <div className="flex w-full items-end justify-end">
                          <span className="text-gray-500 text-3xl mt-3 text line-through	">
                            {Humanize.intComma(product.price)}
                          </span>
                          <span className="text-black text-xl mt-3 mr-2">
                            تومان
                          </span>
                        </div>
                        <div className="flex w-full items-end justify-end">
                          <span className="text-black text-3xl mt-3	">
                            {Humanize.intComma(
                              product.price -
                                (product.price * parseInt(product.discount)) /
                                  100
                            )}
                          </span>
                          <span className="text-black text-xl mt-3 mr-2">
                            تومان
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full items-end justify-end lg:justify-start">
                      <span className="text-black text-5xl mt-3 ">
                        {Humanize.intComma(product.price)}
                      </span>
                      <span className="text-black text-xl mt-3 mr-2">
                        تومان
                      </span>
                    </div>
                  )}
                  <div className="w-full py-2 flex items-center ">
                    <span className="text-2xl text-gray-900 ml-5">
                      تعداد :{" "}
                    </span>
                    <button
                      className={`${
                        qty === product.countInStock
                          ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded"
                          : "opacity-100 text-white bg-indigo-500 w-12 h-12 rounded"
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
                        qty <= 1
                          ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded"
                          : "opacity-100 text-white bg-indigo-500 w-12 h-12 rounded"
                      }`}
                      onClick={decreaseQty}
                      disabled={qty === 1 ? true : false}
                    >
                      <MinusIcon
                        className="block w-8 h-8 mx-auto"
                        aria-hidden={true}
                      />
                    </button>
                  </div>
                  {product.countInStock > 0 ? (
                    <div className="hidden md:block h-24 w-1/2">
                      <button
                        className="flex justify-center items-center bg-pink-500 hover:bg-pink-900 text-white-900 font-semibold hover:text-white py-2 px-4 "
                        onClick={addToCartHandler}
                      >
                        <span className=" w-auto ">
                          <ShoppingBagIcon
                            className="text-white block w-12 h-12"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-xl text-white mr-3">
                          افزودن به سبد خرید
                        </span>
                      </button>
                    </div>
                  ):<span className="text-red-500 text-3xl">محصول در انبار موجود نمی باشد .</span>}
                  <div className="w-full hidden lg:block">
                    <Advantage />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <div className=" collapse w-full  collapse-arrow">
                <input type="checkbox" />
                <p className="collapse-title text-gray-400 text-xl sm:text-2xl md:text-3xl leading-normal px-5 collapse-arrow bg-white text-justify">
                  مشخصات فنی
                </p>
                <div className="collapse-content bg-white mb-20">
                  <p className="text-base sm:text-xl md:text-2xl leading-normal text-gray-400 px-5 text-justify">
                    صرف زمان های طولانی برای انجام سفرهای درون شهری و خرید
                    نیازهای روزانه معنای خود را از دست می دهد. آنچه در فرصت
                    اوقات فراغت برای افراد در اولویت قرار می گیرد، تفریح، آموزش،
                    ورزش،
                  </p>
                </div>
              </div>
              <div className="comment w-full flex flex-col px-6">
                <div className="w-full flex justify-between items-center my-5">
                  <span className="text-xl sm:text-2xl md:text-3xl text-gray-700">
                    نظرات کاربران
                  </span>
                  <Link
                    to={(location) => ({
                      ...location,
                      pathname: `/category/${product.category}`,
                    })}
                    className="text-2xl  md:text-3xl text-pelorous"
                  >
                    مشاهده همه
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:hidden">
              <Advantage />
            </div>

            <button
              className="z-50 bg-pink-500 text-2xl flex justify-center items-center md:hidden fixed bottom-0 w-full h-24"
              onClick={addToCartHandler}
              disabled={product.countInStock === 0}
            >
              <span className=" w-auto ">
                <ShoppingBagIcon
                  className="text-white block w-12 h-12"
                  aria-hidden="true"
                />
              </span>
              {product.countInStock === 0 ? (
                <span className="text-xl text-white mr-3">
                  در حال حاضر محصول موجود نمی باشد
                </span>
              ) : (
                <span className="text-xl text-white mr-3">
                  افزودن به سبد خرید
                </span>
              )}
            </button>

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

            <div className="w-4/5 mx-auto bg-white mb-32 hidden lg:block">
              <ProductFeatureTab product={product} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
