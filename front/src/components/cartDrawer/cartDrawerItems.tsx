
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import Humanize from "humanize-plus";

export default function BasketItem({ product }: any) {
 

  return (
    <div>
      <div className="pt-5 w-full flex">
        <figure className="w-40 h-40">
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="flex flex-col space-y-5">
          <span className="text-2xl text-gray-900 font-bold">
            {product.name}
          </span>
          <div className="w-full py-2 flex items-center ">
            <span className="text-2xl text-gray-900 ml-5">تعداد : </span>
            <button
              className={`${
                product.qty === product.countInStock
                  ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded"
                  : "opacity-100 text-white bg-indigo-500 w-12 h-12 rounded"
              }`}
              disabled={product.qty === product.countInStock ? true : false}
            >
              <PlusIcon className="block w-8 h-8 mx-auto" aria-hidden={true} />
            </button>
            <span className="m-5" x-text="count">
              {product.qty}
            </span>
            <button
              className={`${
                product.qty === 0
                  ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded"
                  : "opacity-100 text-white bg-indigo-500 w-12 h-12 rounded"
              }`}
              disabled={product.qty === 0 ? true : false}
            >
              <MinusIcon className="block w-8 h-8 mx-auto" aria-hidden={true} />
            </button>
          </div>
          <div className="w-full text-right">
            <span className="text-gray-900 text-2xl">
              {Humanize.intComma(product.price)}
            </span>
            <span className="text-gray-400 text-xl">x</span>
            <span className="text-gray-900 text-2xl">{product.qty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
