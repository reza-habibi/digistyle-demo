import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState, useEffect } from "react";
import { TProducts } from "../../type.ds";
import { SearchIcon, ReplyIcon } from "@heroicons/react/outline";

export default function BrandFilter({ products }: { products: TProducts[] }) {
  const brands: {
    brandFa: string;
    brand: string;
    id: string;
    checked: boolean;
  }[] = [];
  products.map((product: TProducts) =>
    brands.push({
      brandFa: product.brandFa,
      brand: product.brand,
      id: product._id,
      checked: false,
    })
  );

  const uniq = new Set();
  const filteredBrand = brands.filter((el) => {
    const duplicate = uniq.has(el.brand);
    uniq.add(el.brand);
    return !duplicate;
  });



  
  const selectedBrand = [];


  return (
    <div className="w-full max-w-sm px-4 ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-gray-800 bg-white group px-6 py-4 rounded-md inline-flex items-center text-3xl font-medium hover:text-opacity-100 hover:border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>برند</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-8 w-8 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className=" flex items-center bg-white border-b">
                    <div className="p-4">
                      <SearchIcon
                        className="block h-8 w-8 text-black"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      className=" w-full bg-transparent placeholder-black	 text-lg py-4 pr-2 leading-tight focus:outline-none focus:bg-transparent"
                      id="search"
                      type="text"
                      placeholder="جستجو در برندها..."
                    />
                  </div>
                  <div className="relative grid gap-8 bg-white p-7 h-96 overflow-y-scroll brand-container">
                    {filteredBrand.map((item) => (
                      <label
                        className="inline-flex items-center mt-3"
                        key={item.id}
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-pink-600  rounded-md"
                          value={item.brand}
                          checked={item.checked}
                        />
                        <div className="flex justify-between w-full items-center">
                          <span className="mr-2 text-gray-800 text-xl">
                            {item.brandFa}
                          </span>
                          <span className="mr-2 text-gray-400 text-xl">
                            {item.brand}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="bg-white flex w-full items-center justify-between py-4 px-4">
                    <div className="text-blue-400 text-xl cursor-pointer">
                      انتخاب همه
                    </div>
                    <div className="flex">
                      <div className="border border-black p-4 cursor-pointer ml-2 hover:bg-black hover:text-white text-black transition-all delay-100">
                        <ReplyIcon
                          className="block h-8 w-8 "
                          aria-hidden="true"
                        />
                      </div>
                      {selectedBrand.length > 0 ? (
                        <button
                          type="button"
                          className="bg-white hover:bg-black border border-black disabled:bg-gray-400 disabled:cursor-not-allowed px-4 py-2 text-2xl hover:text-white transition-all delay-100"
                        >
                          اعمال
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="bg-grey-200 text-grey-700 cursor-not-allowed px-4 py-2 text-2xl"
                        >
                          اعمال
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
