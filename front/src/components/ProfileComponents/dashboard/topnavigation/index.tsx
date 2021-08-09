import { DotsVerticalIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../redux/Store/Store";
import { useToggle } from "../provider/context";

export default function TopNavigation() {
  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo } = userSignin;
  const { toggle }: any = useToggle();
  return (
    <header className="bg-white h-20 items-center relative w-full z-10">
      <div className="flex flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex justify-between items-center pl-10 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex left-0 relative w-3/4">
            <div className="flex group h-full items-center relative w-12">
              <DotsVerticalIcon
                className="block w-10 h-10 text-gray-900 lg:hidden"
                aria-hidden="true"
                onClick={toggle}
              />
            </div>
          </div>
          <Link to="/profile" className="block relative">
            <div className="bg-pink-500 rounded-full w-20 h-20 text-gray-900 flex justify-center items-center">
              <span className="text-white text-4xl">
                {userInfo.fullName.slice(0, 1)}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
