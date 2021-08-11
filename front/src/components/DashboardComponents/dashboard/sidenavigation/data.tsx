
import { ArchiveIcon , StarIcon , HomeIcon , CogIcon} from "@heroicons/react/outline";

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
    title: "آدرس ها",
    icon: <HomeIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/dashboard/address",
  },
  {
    title: " تغییر اطلاعات  ",
    icon: <CogIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/dashboard/change-info",
  },
];

export default data;
