import Carousel from "../components/Carousel/Carousel";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import ProductCategoryCard from "../components/ProductCategoryCard/ProductCategoryCard";


export default function HomeScreen() {
  return (
    <div className="container mx-auto flex flex-col	 items-center min-h-screen">
      <Carousel />

      <div className="w-full bg-white rounded-lg px-10 flex flex-wrap items-start my-5">
        <figure>
          <img src="" alt="" />
        </figure>
        <CardCarousel />
      </div>

      <div className="w-full bg-white rounded-lg px-10 flex flex-wrap items-start pt-6 my-5">
        <ProductCategoryCard/>
      </div>

      <div className="w-full bg-white rounded-lg px-10 flex flex-wrap items-start my-1">
        <div className="  mt-5 w-full">
          <h2 className="text-gray-700 mb-3 pb-5 font-bold border-b border-red-700">
            {" "}
            جدید ترین محصولات
          </h2>
        </div>
        <CardCarousel />
      </div>

      <div className="w-full bg-white rounded-lg px-10 flex flex-wrap items-start my-5">
        <div className="  mt-5 w-full">
          <h2 className="text-gray-700 mb-3 pb-5 font-bold border-b border-red-700">
            {" "}
            پرفروش ترین محصولات
          </h2>
        </div>
        <CardCarousel />
      </div>
    </div>
  );
}
