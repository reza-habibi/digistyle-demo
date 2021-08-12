
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
    title: "کالاهای مورد علاقه",
    icon: <StarIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/dashboard/next-purchase/",
  },
  {
    title: "کاربران",
    icon: <UserGroupIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/dashboard/users",
  },
  {
    title: " تغییر اطلاعات  ",
    icon: <CogIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/dashboard/change-info",
  },
];

export default data;
