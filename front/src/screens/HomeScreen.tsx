import Carousel from "../components/HomeComponents/MainCarousel/MobileBannerCarousel";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import ProductCategoryCard from "../components/HomeComponents/ProductCategoryCard/ProductCategoryCard";
import MobileCategoryHomeSection from "../components/HomeComponents/ProductCategoryCard/MobileCategoryHomeSection";
import CountDown from "../components/CountDown/CountDown";
import Advantage from "../components/Advantage/Advantage";
import Brands from "../components/HomeComponents/Brands/Brands";
import { Link } from "react-router-dom";
import DesktopCarousel from "../components/HomeComponents/MainCarousel/DesktopCarousel";
import CategoryLinks from "../components/HomeComponents/CategoryLinks/CategoryLinks";
import DesktopBrands from "../components/HomeComponents/Brands/DesktopBrands";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "../components/Loading/Loading";
import MessageBox from "../components/MessageBox/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { listProducts } from "../redux/actions/productAction";
export default function HomeScreen() {
  //@ts-ignore
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <div className=" mx-auto flex flex-col gap-y-20 items-center min-h-screen">
          <Carousel />
          <DesktopCarousel />
          <div className="w-full md:grid md:grid-cols-12 flex flex-col bg-white  px-10 flex flex-wrap items-start ">
            <div className="md:col-span-2  mt-5 w-full flex md:flex-col items-center justify-around h-full">
              <figure>
                <img
                  src="/images/svg/sale.svg"
                  alt="hot-sale"
                  className="hidden md:block"
                />
              </figure>
              <figure>
                <img
                  src="/images/svg/mobileSale.svg"
                  alt="hot-sale"
                  className="block md:hidden"
                />
              </figure>
              <CountDown />

              <button className="hidden md:block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                همه محصولات
              </button>
            </div>
            <div className="md:col-span-9 w-full">
              <CardCarousel products={products} />
            </div>
          </div>

          <div className="w-full lg:w-11/12 bg-white rounded-lg sm:px-10 flex flex-wrap items-start pt-6 ">
            <ProductCategoryCard />
            <MobileCategoryHomeSection />
          </div>
          <div className="w-full md:grid md:grid-cols-12 flex-col bg-white  px-10 flex flex-wrap items-start ">
            <div className="md:col-span-2  mt-5 w-full flex md:flex-col items-center justify-around h-full">
              <span className="text-gray-700 md:text-6xl leading-tight md:text-center ">
                {" "}
                پربــازدیـد تریـن‌های اخــیــــــــر
              </span>

              <button className="bg-transparent hover:bg-black text-gray-900 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ">
                مشاهده همه
              </button>
            </div>
            <div className="md:col-span-10 w-full">
              <CardCarousel products={products} />
            </div>
          </div>

          <div className="w-full md:hidden bg-white rounded-lg px-10 flex flex-wrap items-start pt-6 ">
            <Advantage />
          </div>

          <div className="w-full flex justify-around items-center h-auto">
            <Link to="/" className="w-2/5">
              <figure>
                <img src="../images/desktop/banner.jpg" alt="banner" />
              </figure>
            </Link>
            <Link to="/" className="w-2/5">
              <figure>
                <img src="../images/desktop/banner2.jpg" alt="banner" />
              </figure>
            </Link>
          </div>

          <div className="w-full md:grid md:grid-cols-12 flex-col bg-white  px-10 flex flex-wrap items-start ">
            <div className="md:col-span-2  mt-5 w-full flex md:flex-col items-center justify-around h-full">
              <span className="text-gray-700 md:text-6xl leading-tight md:text-center ">
                {" "}
                پرفـــروش تریـن‌های اخــیــــــــر
              </span>

              <button className="bg-transparent hover:bg-black text-gray-900 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ">
                مشاهده همه
              </button>
            </div>
            <div className="md:col-span-10 w-full">
              <CardCarousel products={products} />
            </div>
          </div>

          <div className="w-full hidden lg:block">
            <div className="w-10/12 mx-auto flex justify-between items-center mb-5">
              <span className="text-gray-900 text-4xl">
                محــبوبــــ‌ترینــ بــرنــدها
              </span>
              <span className="flex ">
                <span className="text-gray-700 text-2xl">
                  مشاهده همه برندها
                </span>
                <FaArrowLeft className="text-gray-700 mr-3" />
              </span>
            </div>
            <DesktopBrands brandFilter={"adidas"} direction={"right"} />
            <DesktopBrands brandFilter={"nike"} direction={"left"} />
          </div>

          <div className="w-full lg:hidden bg-white md:rounded-lg flex flex-wrap ">
            <div className=" w-full flex justify-between items-center px-10  ">
              <span className="text-xl sm:text-2xl md:text-3xl text-gray-700">
                برندهای برتر
              </span>
              <Link
                to="/brands"
                className="text-2xl  md:text-3xl text-pelorous"
              >
                مشاهده همه
              </Link>
            </div>
            <Brands />
          </div>

          <div className=" w-10/12 mx-auto hidden lg:block">
            <figure>
              <img src="../images/desktop/gift-banner.png" alt="banner" />
            </figure>
          </div>

          <div className=" w-full bg-white hidden lg:block">
            <CategoryLinks />

            <div className="w-full  hidden md:block bg-white rounded-lg sm:px-10 flex flex-wrap items-start pt-6 ">
              <Advantage />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
