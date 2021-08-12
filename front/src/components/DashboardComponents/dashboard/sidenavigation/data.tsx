
import { ArchiveIcon , StarIcon , UserGroupIcon , CogIcon} from "@heroicons/react/outline";

const data = [
  {
    title: "سفارش ها",
    icon: (
      <ArchiveIcon className="block w-8 h-8" aria-hidden="true" />
    ),
    link: "/dashboard/orders/",
  },
  {
    title: "کاربران",
    icon: <UserGroupIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/dashboard/users",
  },
];

export default data;
