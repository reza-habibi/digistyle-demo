import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Rating from "../components/Rating";
import {
  ChevronRightIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

import { data } from "../data";
import Advantage from "../components/Advantage/Advantage";
import CardCarousel from "../components/HomeComponents/CardCarousel/CardCarousel";
import MobileSingleProduct from "../components/ProductSinglePage/MobileProductSinglePage";
import DesktopSingleProduct from "../components/ProductSinglePage/DesktopProductSinglePage";
export default function ProductScreen(props: {
  match: { params: { id: string } };
}) {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const history = useHistory();
  console.log(history);
  const product = data.products.find((x) => x._id === props.match.params.id);

  return (
    <div>
      <div className="lg:hidden">
        <MobileSingleProduct product={product} />
      </div>

      <div className="hidden lg:block">
        <DesktopSingleProduct product={product} />
      </div>
    </div>
  );
}
