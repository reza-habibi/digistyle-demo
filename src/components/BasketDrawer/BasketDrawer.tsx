import { useEffect, useRef, useState } from "react";
import Portal from "@reach/portal";
import { ShoppingBagIcon, XIcon } from "@heroicons/react/outline";
import Advantage from "../HomeComponents/Advantage/Advantage";

export const BasketDrawer = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-8">
      <ShoppingBagIcon
        onClick={toggle}
        className="block h-10 w-10 text-gray-500"
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
          <span className="text-2xl text-gray-500">سبد خرید</span>
        </DrawerHeader>
        <DrawerBody>
          <div className="w-full mb-5 flex flex-col justify-center items-center">
            <figure>
              <img
                src="./images/any/empty-basket.png"
                alt="empty basket"
                className="w-40 h-64"
              />
            </figure>
            <span className="text-gray-900 text-3xl mt-20">
              سبد خرید شما خالی است.
            </span>
            <button className="bg-transparent -64 hover:bg-gray-500 text-gray-700 font-bold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent my-20">
              صفحه اصلی
            </button>
            <Advantage />
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
    right: `flex drawer-scrollbar overflow-y-scroll h-full w-full md:w-1/3 lg:w-1/3 h-full right-0 mx-0 my-0 absolute focus:outline-none `,
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
