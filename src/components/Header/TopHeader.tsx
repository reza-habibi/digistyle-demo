import React from "react";

function TopHeader() {
  return (
    <div className="w-full bg-white ">
      <div className="container flex  justify-between items-center h-32 mx-auto">
        <div className="flex-shrink-0 flex items-center">
          <img
            className="block lg:hidden h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
          <img
            className="hidden lg:block h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div className=" flex  items-center pr-2  sm:ml-6 sm:pr-0">
          <div className="p-2 flex justify-start">
            <div className="bg-gray-200 flex items-center rounded-xl w-full shadow-lg">
              <input
                className="rounded-r-xl border-l border-gray-400 bg-gray-200  w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="جستجو"
              />

              <select
                name="category"
                id="category"
                aria-label="انتخاب دسته بندی"
                className="w-96 py-4 bg-gray-200 border-l border-gray-400 outline text-gray-700 "
              ></select>

              <div className="py-4 px-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <span className="text-blue-500 hover:bg-black rounded-full p-2 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <span className="text-blue-500 mr-5 cursor-pointer">ورود</span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
