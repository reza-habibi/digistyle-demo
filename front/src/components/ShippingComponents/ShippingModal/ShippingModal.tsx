/* This example requires Tailwind CSS v2.0+ */
import { ChangeEvent, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../../../redux/actions/cartAction";

const provinces = require("../../../json/provinces.json");
const cities = require("../../../json/cities.json");
export default function ShippingModal({ open, setOpen }: any) {
  const cancelButtonRef = useRef(null);
  const [province, setProvince] = useState({
    id: 0,
    name: "",
    slug: "",
  });

  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    province: "",
    city: "",
    address: "",
    postalCode: "",
    telephone: "",
    cityCode: "",
  });

  const dispatch = useDispatch();

  const handleCities = (e: ChangeEvent<HTMLSelectElement>) => {
    setProvince(provinces.find((item: any) => item.name === e.target.value));
  };

  const getValue: any = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    address.province = province.name;
    dispatch(saveShippingAddress(address));
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="w-full h-full fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="w-full h-full flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className=" inline-block align-bottom bg-white rounded-lg  shadow-xl transform transition-all sm:my-8 sm:align-middle lg:h-5/6 lg:w-4/5 w-full h-auto">
              <div className="h-full bg-white ">
                <div className="w-4/5 mx-auto h-auto py-10 flex flex-col">
                  <div className=" w-full flex flex-col my-8 text-right sm:mt-0 sm:ml-4 space-y-16">
                    <Dialog.Title
                      as="h3"
                      className="h-full text-3xl leading-6 font-medium text-gray-900"
                    >
                      افزودن آدرس جدید
                    </Dialog.Title>
                    <Dialog.Title
                      as="h4"
                      className="h-full text-2xl leading-6 font-medium text-gray-900"
                    >
                      اطلاعات تحویل گیرنده
                    </Dialog.Title>
                  </div>
                  <div className="w-full block">
                    <form
                      className="w-full bg-white space-y-12"
                      onSubmit={handleAddress}
                    >
                      <div className="floating-input mb-5 relative ">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                          placeholder=" "
                          autoComplete="off"
                          required
                          onChange={getValue}
                        />
                        <label
                          htmlFor="fullName"
                          className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                        >
                          نام و نام خانوادگی تحویل گیرنده
                        </label>
                      </div>

                      <div className="floating-input mb-5 relative w-1/2">
                        <input
                          type="text"
                          id="mobile"
                          name="mobile"
                          className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                          placeholder=" "
                          autoComplete="off"
                          required
                          onChange={getValue}
                        />
                        <label
                          htmlFor="mobile"
                          className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                        >
                          شماره تماس ضروری
                        </label>
                      </div>

                      <div className="w-full flex">
                        <div className="floating-input mb-5 relative w-1/2 ml-5">
                          <select
                            name="province"
                            className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                            onChange={handleCities}
                          >
                            <option value="">استان</option>
                            {provinces.map((item: any) => (
                              <option
                                key={item.id}
                                value={item.name}
                                className="text-gray-900 text-xl"
                              >
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="floating-input mb-5 relative w-1/2">
                          <select
                            name="city"
                            onChange={getValue}
                            className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                          >
                            {province.id !== 0 ? (
                              cities
                                .filter(
                                  (item: any) =>
                                    item.province_id === province.id
                                )
                                .map((item: any) => (
                                  <option
                                    key={item.id}
                                    value={item.name}
                                    className="text-gray-900 text-xl"
                                  >
                                    {item.name}
                                  </option>
                                ))
                            ) : (
                              <option>شهر</option>
                            )}
                          </select>
                        </div>
                      </div>

                      <div className="floating-input mb-5 relative">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          onChange={getValue}
                          className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                          placeholder=" "
                          autoComplete="off"
                        />
                        <label
                          htmlFor="address"
                          className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                        >
                          آدرس پستی
                        </label>
                      </div>

                      <div className="flex flex-col md:grid md:grid-cols-8 gap-4">
                        <div className="col-span-3 relative floating-input mb-5">
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            onChange={getValue}
                            className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="postalCode"
                            className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                          >
                            کد پستی
                          </label>
                        </div>

                        <div className="col-span-3 relative floating-input mb-5">
                          <input
                            type="text"
                            id="telephone"
                            name="telephone"
                            className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                            placeholder=" "
                            autoComplete="off"
                            onChange={getValue}
                          />
                          <label
                            htmlFor="telephone"
                            className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                          >
                            شماره تلفن ثابت
                          </label>
                        </div>
                        <div className="col-span-2 relative floating-input mb-5">
                          <input
                            type="text"
                            id="cityCode"
                            name="cityCode"
                            onChange={getValue}
                            className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="cityCode"
                            className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
                          >
                            کد شهر
                          </label>
                        </div>
                      </div>

                      <div className="w-full flex justify-end">
                        <button
                          className="bg-transparent text-gray-700 p-3 lg:text-3xl hover:text-red-500 ml-10"
                          onClick={() => setOpen(false)}
                        >
                          انصراف
                        </button>
                        <button
                          type="submit"
                          className="bg-transparent text-pink-500 p-3 lg:text-3xl hover:text-pelorous "
                        >
                          ثبت اطلاعات و بازگشت
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
