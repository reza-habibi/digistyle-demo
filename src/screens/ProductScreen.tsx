
import { data } from "../data";
import MobileSingleProduct from "../components/ProductSinglePage/MobileProductSinglePage";
import DesktopSingleProduct from "../components/ProductSinglePage/DesktopProductSinglePage";
export default function ProductScreen(props: {
  match: { params: { id: string } };
}) {

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
