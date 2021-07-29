import { ChangeEvent, useEffect, useRef, useState } from "react";
/* You'll need to install @reach/portal which simplify creating portal*/
import Portal from "@reach/portal";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { AllCategories } from "../../data";
import { Link } from "react-router-dom";
export const DesktopSearchDrawer = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [filter, setFilter] = useState("");
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.currentTarget.value);
  };

  let searchText = AllCategories.filter((item: any) =>
    item.name.includes(filter)
  );
  return (
    <div className="w-3/5 border-b border-black mb-5" >
        <div className=" flex items-center">
          <div className="p-4">
            <SearchIcon
              className="block h-8 w-8 text-black"
              aria-hidden="true"
            />
          </div>
          <input
            className=" w-full bg-transparent placeholder-black	 text-lg py-4 pr-2 leading-tight focus:outline-none focus:bg-transparent"
            id="search"
            type="text"
            placeholder=" جستجوی محصولات از 2110 برند"
            onClick={toggle}
          />
        </div>

      <Drawer isOpen={isOpen} toggle={toggle} position="left">
        <DrawerHeader>
          <h4 className="text-2xl md:text-3xl font-light">
            <XIcon
              onClick={toggle}
              className="block h-10 w-10"
              aria-hidden="true"
              cursor="pointer"
            />
          </h4>
        </DrawerHeader>
        <DrawerBody>
          <div className="w-full border-b border-black mb-5">
            <div className=" flex items-center">
              <input
                className=" w-full text-lg py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200"
                id="search"
                type="text"
                placeholder="جستجو در همه دسته بندی ها"
                value={filter}
                onChange={handleSearch}
              />

              <div className="p-4">
                <SearchIcon
                  className="block h-8 w-8 text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start ">
            {searchText.length === 0 ? (
              <div
                className="bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">
                  دسته بندی مورد نظر شما یافت نشد{" "}
                </span>
              </div>
            ) : (
              searchText.map((item: any, index: number) => {
                if (filter !== "") {
                  return (
                    <Link
                      key={index}
                      to={item.url}
                      className="w-full border-b mb-4 pb-5"
                      onClick={toggle}
                    >
                      <span className="text-xl">{item.name}</span>
                    </Link>
                  );
                } else {
                  return null;
                }
              })
            )}
          </div>
        </DrawerBody>
      </Drawer>
    </div>
  );
};
/* Logic */
const style = {
  animation: {
    top: "animate-drawer-top",
  },
  orientation: {
    top: `flex drawer-scrollbar w-full h-2/3 bg-white absolute top-0 focus:outline-none  overflow-scroll`,
  },
  body: `w-1/2 mx-auto h-full bg-white flex-shrink flex-grow p-4`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  content: `h-full relative w-full flex flex-col bg-white pointer-events-auto`,
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
              ref={ref}
              tabIndex={-1}
              aria-modal={true}
              role="dialogue"
              className={style.orientation.top}
            >
              <div className={`${style.animation.top} ${style.content}`}>
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
