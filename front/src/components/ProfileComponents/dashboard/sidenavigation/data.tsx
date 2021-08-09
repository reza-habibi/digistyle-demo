
import { ArchiveIcon , StarIcon , HomeIcon} from "@heroicons/react/outline";

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
];

export default data;
