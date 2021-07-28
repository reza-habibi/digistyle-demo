import { DrawerPage } from "./Drawer";
import { SearchDrawer } from "../SearchDrawer/SearchDrawer";
import { BasketDrawer } from "../BasketDrawer/BasketDrawer";
function MobileHeader() {
  return (
    <div className=" w-full bg-white h-auto flex justify-between items-center lg:hidden">
      <div className="flex-shrink-0 flex items-center">
        <DrawerPage />
        <img
          className="block h-6 w-auto"
          src="/images/svg/logo.svg"
          alt="Logo"
        />
        
      </div>
      <div className=" flex  items-center pl-5  sm:ml-6 sm:pr-0">
        <SearchDrawer />
        <BasketDrawer/>
      </div>
    </div>
  );
}

export default MobileHeader;
