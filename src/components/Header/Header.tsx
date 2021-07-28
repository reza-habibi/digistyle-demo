import { Disclosure } from "@headlessui/react";
import { TNavigation } from "../../type.ds";
import { useEffect, useState } from "react";


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
      className={`w-full hidden md:block absolute top-0 z-10 bg-transparent py-10 transition-all duration-500 ${
        scrolled ? "fixed top-0 motion-safe:animate-fade-in-down" : ""
      }`}
    >
      <>
        <div className=" mx-auto container">
          <div className="relative flex items-center justify-between h-auto">
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
