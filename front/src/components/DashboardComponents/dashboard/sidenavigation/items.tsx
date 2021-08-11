import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { signout } from "../../../../redux/actions/userAction";
import { RootState } from "../../../../redux/Store/Store";

import data from "./data";

const style = {
  inactive: `text-gray-400`,
  active: `font-medium text-gray-900`,
  link: `flex items-center justify-start my-2 p-4 text-2xl w-full hover:text-pink-500`,
};

export default function SidenavItems() {
  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const history = useHistory()
  const signoutHandler = () => {
    dispatch(signout());
    history.push('/')
  };
  const { pathname } = useLocation();
  return (
    <ul className="md:pl-6 divide-y divide-gray-200">
      <li>
        <Link to="/dashboard">
          <span
            className={`${style.link} 
               ${"/dashboard" === pathname ? style.active : style.inactive}`}
          >
            <span className="border border-gray-500 rounded-full p-2">
              <UserIcon
                className="block w-8 h-8"
                aria-hidden="true"
              />
            </span>
            <span className="mx-4">{userInfo.fullName}</span>
          </span>
        </Link>
      </li>
      <li>
        {data.map((item) => (
          <Link to={item.link} key={item.title}>
            <span
              className={`${style.link} 
               ${item.link === pathname ? style.active : style.inactive}`}
            >
              <span>{item.icon}</span>
              <span className="mx-4">{item.title}</span>
            </span>
          </Link>
        ))}
      </li>

      <li>
        <button onClick={signoutHandler}>
          <span className={`${style.link} ${style.inactive}`}>
            <span >
              <LogoutIcon
                className="block w-8 h-8"
                aria-hidden="true"
              />
            </span>
            <span className="mx-4 text-xl">خروج از حساب کاربری</span>
          </span>
        </button>
      </li>
    </ul>
  );
}
