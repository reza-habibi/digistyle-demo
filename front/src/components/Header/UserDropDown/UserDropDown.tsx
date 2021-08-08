import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  ArchiveIcon,
  CogIcon,
  HeartIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { signout } from "../../../redux/actions/userAction";
import { Link } from "react-router-dom";

export default function UserDropDown() {

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className=" text-right flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex justify-center w-full pr-4 text-sm font-thin">
            <UserIcon className="block text-black w-8 h-8" aria-hidden="true" />
            <ChevronDownIcon
              className="w-8 h-8 ml-2 -mr-1 text-black font-thin"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-80 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-2 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-xl`}
                  >
                    {active ? (
                      <CogIcon className="w-8 h-8 mx-2" aria-hidden="true" />
                    ) : (
                      <CogIcon className="w-8 h-8 mx-2" aria-hidden="true" />
                    )}
                    حساب کاربری
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-2">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/orderhistory"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-xl`}
                  >
                    {active ? (
                      <ArchiveIcon
                        className="w-8 h-8 mx-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveIcon
                        className="w-8 h-8 mx-2"
                        aria-hidden="true"
                      />
                    )}
                    سفارش های من
                  </Link >
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-xl`}
                  >
                    {active ? (
                      <HeartIcon className="w-8 h-8 mx-2" aria-hidden="true" />
                    ) : (
                      <HeartIcon className="w-8 h-8 mx-2" aria-hidden="true" />
                    )}
                    لیست علاقه مندی ها
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={signoutHandler}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-xl`}
                  >
                    {active ? (
                      <LogoutIcon className="w-8 h-8 mx-2" aria-hidden="true" />
                    ) : (
                      <LogoutIcon className="w-8 h-8 mx-2" aria-hidden="true" />
                    )}
                    خروج از حساب کاربری
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
