import React from "react";
import { XIcon } from "@heroicons/react/outline";
import Humanize from "humanize-plus";

function CartItem({ product, carts, setCarts }: any) {
  const handleRemove = (id: string) => {
    setCarts(carts.filter((item: any) => item._id !== id));
  };

  console.log(carts);

  return (
    <div className="w-full bg-transparent h-auto  flex flex-col items-center lg:grid lg:grid-cols-12 lg:border lg:border-gray-700 lg:border-opacity-60 p-3 relative mt-5">
      <div className="flex col-span-5 grid grid-cols-5">
        <figure className="lg:w-2/3 lg:h-auto mx-auto col-span-2 ">
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="flex flex-col w-full h-full space-y-10 col-span-3 py-3 mr-5">
          <span className="text-black text-2xl lg:text-4xl font-bold">
            {product.brandFa}
          </span>
          <span className="text-lack text-xl lg:text-2xl lg:pr-2">
            {product.name}
          </span>
          <span className="text-gray-700 text-lg lg:text-xl">
            کد محصول : 123456789
          </span>
        </div>
      </div>
      <div className="col-span-6 flex flex-col w-full h-full divide-gray-500 divide-y">
        <div className="flex justify-between items-start py-8 h-2/3">
          <div className="self-end ">
            <span className="text-base md:text-xl lg:text-2xl text-gray-500">
              تعداد : {product.qty}
            </span>
          </div>
          <div className="flex flex-col w-2/3 h-full justify-between">
            <div className="w-full flex justify-between">
              <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                قیمت واحد
              </span>
              <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                {" "}
                {Humanize.intComma(product.price * product.qty)} تومان
              </span>
            </div>
            {product.discount !== "0" ? (
              <div className="w-full flex justify-between">
                <span className="text-red-400 text-base md:text-xl lg:text-2xl">
                  تخفیف شگفت آویز
                </span>
                <span className="text-red-400 text-base md:text-xl lg:text-2xl">
                  {" "}
                  {Humanize.intComma(
                    ((product.price * parseInt(product.discount)) / 100) *
                      product.qty
                  )}{" "}
                  تومان
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full ">
          {product.discount ? (
            <div className="w-2/3 py-8 mr-auto flex justify-between">
              <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                قیمت کل
              </span>
              <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                {" "}
                {Humanize.intComma(
                  product.price * product.qty -
                    ((product.price * parseInt(product.discount)) / 100) *
                      product.qty
                )}{" "}
                تومان
              </span>
            </div>
          ) : (
            <div className="w-2/3 py-8 mr-auto flex justify-between">
              <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                قیمت کل
              </span>
              <span className="text-gray-400 text-base md:text-xl lg:text-2xl">
                {" "}
                {Humanize.intComma(product.price)} تومان
              </span>
            </div>
          )}
        </div>
      </div>

      <span
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center absolute top-5 left-5 cursor-pointer"
        onClick={() => handleRemove(product._id)}
      >
        <XIcon className="block h-8 w-8" aria-hidden={true} />
      </span>
    </div>
  );
}

export default CartItem;
