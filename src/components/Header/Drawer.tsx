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
          <XIcon
            onClick={toggle}
            className="block h-6 w-6"
            aria-hidden="true"
          />
        </DrawerHeader>
        <DrawerBody>
          <div className=" w-full flex flex-col">
            {mobileCategory.map((cat: any, index: number) => (
              <Link key={index} to={cat.url} className="mb-3" onClick={toggle}>
                <div
                  className={`${cat.color} flex justify-center items-center relative min-h-mb-cat`}
                >
                  <span className="text-black text-lg text-bold absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
                    {cat.name}
                  </span>
                  <div
                    className={`${cat.img} bg-contain h-mb-cat w-mb-cat mr-auto`}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </DrawerBody>
        <DrawerFooter>
          <button
            onClick={toggle}
            className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500"
          >
            Close
          </button>
          <button
            onClick={toggle}
            className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
          >
            Confirm
          </button>
        </DrawerFooter>
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
    right: `flex w-10/12 md:w-80 lg:w-96 h-full right-0 mx-0 my-0 absolute focus:outline-none `,
  },
  body: `flex-shrink flex-grow p-4`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  content: `relative w-full flex flex-col bg-white pointer-events-auto`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-hidden`,
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
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
  return (
    <div className={style.header}>
      <h4 className={style.headerTitle}>{children}</h4>
    </div>
  );
}
function DrawerBody({ children }: any) {
  return <div className={style.body}>{children}</div>;
}
function DrawerFooter({ children }: any) {
  return <div className={style.footer}>{children}</div>;
}
