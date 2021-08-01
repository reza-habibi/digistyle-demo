/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ShippingModal({ open, setOpen }: any) {
  const cancelButtonRef = useRef(null);

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
            <div className=" inline-block align-bottom bg-white rounded-lg  shadow-xl transform transition-all sm:my-8 sm:align-middle lg:h-5/6 lg:w-4/5 w-full h-full">
              <div className="h-full bg-white ">
                <div className="w-4/5 mx-auto h-full py-10 flex flex-col">
                  <div className=" w-full flex flex-col my-8 text-right sm:mt-0 sm:ml-4 space-y-8">
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
                    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                      <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
                        <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                          <form className="w-full">
                            <div className="floating-input mb-5 relative">
                              <input
                                type="email"
                                id="email"
                                className="border-none focus:border-b border-gray-200  outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                                placeholder="name@example.com"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="email"
                                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
                              >
                                نام و نام خانوادگی تحویل گیرنده
                              </label>
                            </div>
                            <div className="floating-input mb-5 relative">
                              <input
                                type="password"
                                id="password"
                                className="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                                placeholder="password"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="password"
                                className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
                              >
                                Password
                              </label>
                            </div>
                            <button className="w-full bg-indigo-600 text-white p-3 rounded-md">
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-full sm:text-xl"
                  onClick={() => setOpen(false)}
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-xl"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
