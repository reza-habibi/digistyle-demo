import React from "react";

function Loading() {
  return (
    <div className="w-screen h-screen absolute top-0 z-50 bg-white flex flex-col space-y-16 justify-center items-center ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      <span className="text-gray-700 text-2xl lg:text-4xl">صفحه در حال بارگذاری میباشد.</span>
    </div>
  );
}

export default Loading;
