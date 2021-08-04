import DesktopSingleProduct from "../components/ProductSinglePage/DesktopProductSinglePage";
import { useSelector, useDispatch } from "react-redux";
import MessageBox from "../components/MessageBox/MessageBox";
import Loading from "../components/Loading/Loading";
import { useEffect } from "react";
import { detailsProduct } from "../redux/actions/productAction";
import { RootState } from "../redux/Store/Store";

export default function ProductScreen(props: any) {
  const productId = props.match.params.id;
  const productDetails = useSelector(
    (state: RootState) => state.productDetails
  );
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <DesktopSingleProduct product={product} />
      )}
    </div>
  );
}
