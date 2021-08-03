import React from "react";

export default function MessageBox({error}:{error:string}) {
  return (
    <div className="w-screen h-screen z-50 absolute top-0 bg-white flex justify-center items-center">
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          خطا
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
}
