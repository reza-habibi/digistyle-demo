import { Disclosure } from "@headlessui/react";
import { TNavigation } from "../../type.ds";
import { useEffect, useState } from "react";
import { DrawerPage } from "./Drawer";
import { SearchDrawer } from "../SearchDrawer/SearchDrawer";

const navigation: TNavigation = [
  { name: "خانه", href: "/", current: true },
  { name: "محصولات", href: "/Products", current: false },
  { name: "تماس با ما", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <Disclosure
      as="nav"
      className={`w-full absolute top-0 z-10 bg-transparent py-10 transition-all duration-500 ${
        scrolled ? "fixed top-0 motion-safe:animate-fade-in-down" : ""
      }`}
    >
      <>
        <div className=" mx-auto container">
          <div className="relative flex items-center justify-between h-auto">
            <div className="absolute inset-y-0 right-0 w-full flex justify-between items-center sm:hidden">
              {/* Mobile menu button*/}
              <DrawerPage />
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
                <SearchDrawer/>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-blue-500 mx-2 "
                          : "text-gray-700 hover:text-blue-500 hover:text-white",
                        "px-5 py-2 rounded-md text-md font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
