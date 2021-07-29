import { Disclosure } from "@headlessui/react";
import { TNavigation } from "../../type.ds";
import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { DesktopSearchDrawer } from "../SearchDrawer/DesktopSearchDrawer";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const navigation: TNavigation = [
  { name: "زنانه", href: "/category/women" },
  { name: "مردانه", href: "/category/men" },
  { name: "بچگانه", href: "/category/kids" },
  { name: "زیبایی و سلامت", href: "/category/beauty" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  const location = useLocation()

  console.log(location)
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
      className={`w-full hidden lg:block ${location.pathname==="/"?"absolute top-0 z-10 bg-transparent":"relative bg-white"}  py-10 transition-all duration-500 ${
        scrolled ? "fixed top-0 motion-safe:animate-fade-in-down" : ""
      }`}
    >
      <>
        <div className=" mx-auto container">
          <div className="relative flex items-center justify-between h-auto">
            <div className="w-full flex flex-col items-center justify-center sm:items-stretch sm:justify-start">
              <div className="top w-full grid grid-cols-3">
                <div className="w-full basket flex justify-start items-center">
                  <ShoppingBagIcon
                    className="block h-10 w-10 text-black"
                    aria-hidden="true"
                  />
                  <span className="text-black mr-5 text-xl">وارد شوید</span>
                </div>
                <div className="logo  w-full border-b border-black flex justify-center items-center pb-5">
                  <Link to="/">
                  <figure>
                    <img src="../images/svg/logo.svg" alt="logo" className="w-80 h-auto" />
                  </figure>
                  </Link>
                </div>
                <div className="search w-full flex justify-end">
                  <DesktopSearchDrawer/>
                </div>
              </div>
              <div className="nav w-full flex justify-center items-center mt-5">
                <div className="flex space-x-4 ml-5 border-l border-black">
                  {navigation.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={classNames(
                        "text-gray-900 hover:text-black font-bold px-5 py-2 rounded-md text-xl font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="/sale"
                    className="text-red-500 font-bold hover:text-black px-5 py-2 rounded-md text-xl font-medium"
                  >
                    فروش ویژه
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
