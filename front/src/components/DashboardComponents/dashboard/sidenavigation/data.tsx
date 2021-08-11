
import { ArchiveIcon , StarIcon , HomeIcon , CogIcon} from "@heroicons/react/outline";

const data = [
  {
    title: "سفارش های من",
    icon: (
      <ArchiveIcon className="block w-8 h-8" aria-hidden="true" />
    ),
    link: "/profile/orders/",
  },
  {
    title: "کالاهای مورد علاقه",
    icon: <StarIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/profile/next-purchase/",
  },
  {
    title: "آدرس ها",
    icon: <HomeIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/profile/address",
  },
  {
    title: " تغییر اطلاعات  ",
    icon: <CogIcon className="block w-8 h-8" aria-hidden="true"/>,
    link: "/profile/change-info",
  },
];

export default data;
