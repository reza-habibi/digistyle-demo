import React from "react";
import Carousel from "../components/Carousel/Carousel";
import CardCarousel from "../components/CardCarousel/CardCarousel";

export default function HomeScreen() {
  return (
    <div className="flex flex-col	 items-center min-h-screen">
      <Carousel />

      <div className="container ml-auto mr-auto flex flex-wrap items-start mt-5">
        <div className="  mt-5 " >
          <h2 className="text-gray-700 mb-3"> جدید ترین محصولات</h2>
          <div className="border-0 bg-gray-500 text-gray-500 h-px w-full"/>
        </div>
        <CardCarousel />
      </div>
    </div>
  );
}
