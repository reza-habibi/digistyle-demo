import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import Humanize from "humanize-plus";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";

export default function CartDrawerItems({ product }: any) {
  const dispatch = useDispatch();
  const [newQty, setNewQty] = useState(product.qty);
  const removeFromCartHandler = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const increaseQuantity = () => {
    setNewQty((prevState: number) => prevState + 1);
  };

  const decreaseQuantity = () => {
    setNewQty((prevState: number) => prevState - 1);
  };

  useEffect(() => {
    dispatch(addToCart(product.product, newQty));
  }, [newQty]);

  return (
    <div>
      <div className="pt-5 w-full flex relative">
        <figure className="w-40 h-40">
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="w-full flex flex-col space-y-5">
          <span className="text-2xl text-gray-900 font-bold">
            {product.name}
          </span>
          <div className="w-full py-2 flex items-center ">
            <span className="text-2xl text-gray-900 ml-5">تعداد : </span>
            <button
              onClick={increaseQuantity}
              className={`${
                newQty === product.countInStock
                  ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded"
                  : "opacity-100 text-white bg-indigo-500 w-12 h-12 rounded cursor-pointer"
              }`}
              disabled={newQty === product.countInStock ? true : false}
            >
              <PlusIcon className="block w-8 h-8 mx-auto" aria-hidden={true} />
            </button>
            <span className="m-5" x-text="count">
              {newQty}
            </span>
            <button
              className={`${
                newQty === 1
                  ? "cursor-not-allowed	w-12 h-12 text-white bg-indigo-500  opacity-50 rounded"
                  : "opacity-100 text-white bg-indigo-500 w-12 h-12 rounded"
              }`}
              disabled={newQty === 1 ? true : false}
              onClick={decreaseQuantity}
            >
              <MinusIcon className="block w-8 h-8 mx-auto" aria-hidden={true} />
            </button>
          </div>
          <span className="w-14 h-14 bg-white rounded-full flex items-center justify-center absolute top-5 left-5 cursor-pointer">
            <XIcon
              className="block h-8 w-8"
              aria-hidden={true}
              onClick={() => removeFromCartHandler(product.product)}
            />
          </span>
          <div className="w-full flex justify-between items-center">
            <div className="">
              <span className="text-gray-900 text-2xl">
                {Humanize.intComma(product.price)}
              </span>
              <span className="text-gray-400 text-xl">x</span>
              <span className="text-gray-900 text-2xl">{newQty}</span>
            </div>

            {product.discount !== "0" && (
              <div className="bg-pink-500  h-16 px-4 flex items-center">
                <span className="text-white text-xl">تخفیف :</span>
                <span className="text-white text-xl">
                  {Humanize.intComma(
                    (product.price * parseInt(product.discount)) / 100
                  )}
                </span>
                <span className="text-white text-lg">تومان</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
