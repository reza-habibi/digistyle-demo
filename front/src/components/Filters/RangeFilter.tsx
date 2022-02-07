import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  Fragment,
} from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { TProducts } from "../../type.ds";

export default function RangeFilter({ products }: { products: TProducts[] }) {
  const prices: number[] = [];
  products.map((item: TProducts) => prices.push(item.price));

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.right = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);
  return (
    <div className=" px-4 ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-gray-800 bg-white group px-6 py-4 rounded-md inline-flex items-center text-3xl font-medium hover:text-opacity-100 hover:border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>قیمت</span>
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
              <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative  bg-white p-7 min-h-32">
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={minVal}
                      onChange={(event) => {
                        const value = Math.min(
                          Number(event.target.value),
                          maxVal - 1
                        );
                        setMinVal(value);
                        minValRef.current = value;
                      }}
                      className="thumb thumb--right"
                      //@ts-ignore
                      style={{ zIndex: minVal > max - 100 && "5" }}
                    />
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={maxVal}
                      onChange={(event) => {
                        const value = Math.max(
                          Number(event.target.value),
                          minVal + 1
                        );
                        setMaxVal(value);
                        maxValRef.current = value;
                      }}
                      className="thumb thumb--right"
                    />

                    <div className="slider">
                      <div className="slider__track" />
                      <div ref={range} className="slider__range" />
                      <div className="slider__right-value">{minVal}</div>
                      <div className="slider__left-value">{maxVal}</div>
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
