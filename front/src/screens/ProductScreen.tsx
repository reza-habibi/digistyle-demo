import MobileSingleProduct from "../components/ProductSinglePage/MobileProductSinglePage";
import DesktopSingleProduct from "../components/ProductSinglePage/DesktopProductSinglePage";
import { useSelector, useDispatch } from "react-redux";
import MessageBox from "../components/MessageBox/MessageBox";
import Loading from "../components/Loading/Loading";
import { useEffect } from "react";
import { detailsProduct } from "../redux/actions/productAction";

export default function ProductScreen(props: any) {
  const productId = props.match.params.id;
  //@ts-ignore
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <div>
          <div className="lg:hidden">
            <MobileSingleProduct product={product} />
          </div>

          <div className="hidden lg:block">
            <DesktopSingleProduct product={product} />
          </div>
        </div>
      )}
    </div>
  );
}
