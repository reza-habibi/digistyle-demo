import { HomeIcon, MailIcon, PhoneIcon, UserIcon } from "@heroicons/react/outline";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store/Store";

export default function Address() {
  const cart = useSelector((state: RootState) => state.cart);
  const { shippingAddress } = cart;
  console.log(shippingAddress);
  return (
    <div className="w-9/10 mx-auto flex flex-col space-y-5">
      <div className="w-full">
        <span className="text-gray-900">{shippingAddress.address}</span>
      </div>

      <div className="w-full flex items-center">
        <span className="text-gray-500 text-xl ml-4">
          <UserIcon className="block w-8 h-8" aria-hidden="true" />
        </span>
        <span className="text-gray-600 text-xl">
          {shippingAddress.fullName}
        </span>
      </div>
      <div className="w-full flex items-center">
        <span className="text-gray-500 text-xl ml-4">
          <PhoneIcon className="block w-8 h-8" aria-hidden="true" />
        </span>
        <span className="text-gray-600 text-xl">
          {shippingAddress.mobile}
        </span>
      </div>
      <div className="w-full flex items-center">
        <span className="text-gray-500 text-xl ml-4">
          <HomeIcon className="block w-8 h-8" aria-hidden="true" />
        </span>
        <span className="text-gray-600 text-xl">
          {shippingAddress.province} , {shippingAddress.city}
        </span>
      </div>
      <div className="w-full flex items-center">
        <span className="text-gray-500 text-xl ml-4">
          <MailIcon className="block w-8 h-8" aria-hidden="true" />
        </span>
        <span className="text-gray-600 text-xl">
          {shippingAddress.postalCode}
        </span>
      </div>
    </div>
  );
}
