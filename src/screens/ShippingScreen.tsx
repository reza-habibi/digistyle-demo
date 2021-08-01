import React from "react";
import { useState } from "react";
import ProgressBar from "../components/CartComponents/ProgressBar/ProgressBar";
import ShippingModal from "../components/ShippingComponents/ShippingModal/ShippingModal";

function ShippingScreen() {
  const [open, setOpen] = useState(false);

  const handleModal = ()=>{
      setOpen(true)
  }

  return (
    <div className="mt-10 flex flex-col space-y-20">
      <ProgressBar />
      <div className="heading xl:w-3/4 lg:w-4/5 w-full mx-auto flex justify-between items-center h-auto">
        <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-bold">
          مکان و زمان تحویل سفارش
        </h2>
        <button
          className="bg-transparent w-80 hover:bg-gray-500 text-gray-700 font-bold hover:text-white py-4 border border-gray-500 hover:border-transparent"
          onClick={handleModal}
        >
            افزودن آدرس
        </button>
      </div>
      <ShippingModal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default ShippingScreen;
