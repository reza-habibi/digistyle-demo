import { useEffect, useRef, useState } from "react";
import Portal from "@reach/portal";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { mobileCategory } from "../../data";
import { Link } from "react-router-dom";

export const DrawerPage = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="m-8">
      <MenuIcon
        onClick={toggle}
        className="block h-10 w-10"
        aria-hidden="true"
      />

      <Drawer isOpen={isOpen} toggle={toggle} position="left">
        <DrawerHeader>
          <h4 className="text-2xl md:text-3xl font-light">
            <XIcon
              onClick={toggle}
              className="block h-10 w-10"
              aria-hidden="true"
            />
          </h4>
          <button className="bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-500  rounded">
            ورود و ثبت نام
          </button>
        </DrawerHeader>
        <DrawerBody>
          <div className="w-full border-b border-black mb-5">
            <div className=" flex items-center" >
              <input
                className="rounded-l-full w-full text-lg py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="جستجو در همه دسته بندی ها"
              />

              <div className="p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
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
          <div className=" w-full flex flex-col">
            {mobileCategory.map((cat: any, index: number) => (
              <Link key={index} to={cat.url} className="mb-5" onClick={toggle}>
                <div
                  className={`${cat.color} flex justify-center items-center relative min-h-mb-cat`}
                >
                  <span className="text-black text-xl text-bold absolute right-0 top-1/2 transform -translate-y-1/2 mr-6">
                    {cat.name}
                  </span>
                  <div
                    className={`${cat.img} bg-contain h-mb-cat w-mb-cat mr-auto`}
                  ></div>
                </div>
              </Link>
            ))}
            <div className="w-full border-t border-b py-8 text-xl">
              <Link to="/sale">فروش ویژه</Link>
            </div>
            <div className="w-full border-t border-b py-8 text-xl">
              <Link to="/brands">برند ها</Link>
            </div>
          </div>
        </DrawerBody>
      </Drawer>
    </div>
  );
};
/* Logic */
const style = {
  animation: {
    right: "animate-drawer-right",
  },
  orientation: {
    right: `flex drawer-scrollbar overflow-y-scroll h-full w-10/12 md:w-80 lg:w-96 h-full right-0 mx-0 my-0 absolute focus:outline-none `,
  },
  body: `flex-shrink flex-grow p-4 bg-white`,
  content: `relative w-full h-full flex flex-col bg-white pointer-events-auto`,
  header: `w-full flex items-center justify-between p-4 border-b border-gray-300 h-24`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-hidden`,
  overlay: `fixed top-0 left-0 z-30 w-full h-screen bg-black opacity-50`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
};
function Drawer({ children, isOpen, toggle }: any) {
  const ref = useRef(null);
  // close drawer on click outside
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, ref, toggle]);
  // close drawer when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event: any) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        toggle(false);
      }
    };
    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isOpen, toggle]);
  // hide scrollbar and prevent body from moving when drawer is open
  //put focus on drawer dialogue
  useEffect(() => {
    if (!isOpen) return;
    ref.current?.focus();
    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    html.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      html.style.overflow = "";
      html.style.paddingRight = "";
    };
  }, [isOpen]);
  return (
    <Portal>
      {isOpen && (
        <>
          <div className={style.overlay} />
          <div className={style.container}>
            <div
              aria-modal={true}
              className={style.orientation.right}
              ref={ref}
              // eslint-disable-next-line jsx-a11y/aria-role
              role="dialogue"
              tabIndex={-1}
            >
              <div className={`${style.animation.right} ${style.content}`}>
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}
function DrawerHeader({ children }: any) {
  return <div className={style.header}>{children}</div>;
}
function DrawerBody({ children }: any) {
  return <div className={style.body}>{children}</div>;
}
