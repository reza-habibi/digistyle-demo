import Overlay from "./provider/overlay";
import TopNavigation from "./topnavigation";
import SideNavigation from "./sidenavigation";
import DashboardProvider from "./provider/context";

const style = {
  container: `h-full lg:w-full bg-white relative`,
  mainContainer: ` flex flex-col m-h-full pl-0 w-full lg:w-full`,
  main: ` pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tr-3xl`,
};

export default function DashboardLayout({ children }: any) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="h-full flex items-start lg:px-20">
          <Overlay />
          <SideNavigation />
          <div className={style.mainContainer}>
            <TopNavigation />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
