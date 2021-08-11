import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import { detailsProduct } from "../redux/actions/productAction";
import { RootState } from "../redux/Store/Store";

export default function ProductEditScreen(props: {
  match: { params: { id: any } };
}) {
  const productId = props.match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mainCategoryEn, setMainCategoryEn] = useState("");
  const [categoryEn, setCategoryEn] = useState("");
  const [subCategoryEn, setSubCategoryEn] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [brandFa, setBrandFa] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  const productDetails = useSelector(
    (state: RootState) => state.productDetails
  );
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setMainCategory(product.mainCategory);
      setCategory(product.category);
      setSubCategory(product.subCategory);
      setMainCategoryEn(product.mainCategoryEn);
      setCategoryEn(product.categoryEn);
      setSubCategoryEn(product.subCategoryEn);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setBrandFa(product.brandFa);
      setDescription(product.description);
      setDiscount(product.discount);
    }
  }, [product, dispatch, productId]);
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // TODO: dispatch update product
  };
  return (
    <div className="bg-white">
      <div>
        <h1 className="w-1/2 mx-auto text-gray-900 py-10">
          ویرایش محصول {productId}
        </h1>
      </div>
      <form
        className="w-2/3 mx-auto bg-white space-y-10 py-10"
        onSubmit={submitHandler}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <span className="text-red-900 bg-red-400 px-10 py-4 rounded">
            {error}
          </span>
        ) : (
          <>
            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="name"
                name="name"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label
                htmlFor="name"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                نام محصول
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="price"
                name="price"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <label
                htmlFor="price"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                قیمت
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="image"
                name="image"
                dir="ltr"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16 text-left"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
              <label
                htmlFor="image"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                تصویر محصول
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="mainCategory"
                name="mainCategory"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setMainCategory(e.target.value)}
                value={mainCategory}
              />
              <label
                htmlFor="mainCategory"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                دسته بندی مادر
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="mainCategoryEn"
                name="mainCategoryEn"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setMainCategoryEn(e.target.value)}
                value={mainCategoryEn}
              />
              <label
                htmlFor="mainCategoryEn"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                دسته بندی مادر به انگلیسی
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="category"
                name="category"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
              <label
                htmlFor="category"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                دسته بندی اصلی
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="categoryEn"
                name="categoryEn"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setCategoryEn(e.target.value)}
                value={categoryEn}
              />
              <label
                htmlFor="categoryEn"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                دسته بندی اصلی به انگلیسی
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="subCategory"
                name="subCategory"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
              />
              <label
                htmlFor="subCategory"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                دسته بندی محصول
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="subCategoryEn"
                name="subCategoryEn"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setSubCategoryEn(e.target.value)}
                value={subCategoryEn}
              />
              <label
                htmlFor="subCategoryEn"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                دسته بندی محصول به انگلیسی
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="countInStock"
                name="countInStock"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setCountInStock(e.target.value)}
                value={countInStock}
              />
              <label
                htmlFor="countInStock"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                موجودی انبار
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="brandFa"
                name="brandFa"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setBrandFa(e.target.value)}
                value={brandFa}
              />
              <label
                htmlFor="brandFa"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                برند
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="brand"
                name="brand"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              />
              <label
                htmlFor="brand"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                برند به انگلیسی
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <input
                type="text"
                id="discount"
                name="discount"
                className=" border-b border-gray-300 focus:border-gray-900  outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                placeholder=" "
                autoComplete="off"
                required
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
              />
              <label
                htmlFor="discount"
                className="absolute top-0 right-0 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out "
              >
                درصد تخفیف محصول
              </label>
            </div>

            <div className="floating-input w-1/2 mb-5 relative mx-auto">
              <textarea
                className="w-full resize-y border-b border-gray-300 focus:border-gray-900 outline-none focus:border-gray-300 focus:shadow-sm w-full p-3 h-16"
                value={description}
                placeholder="توضیحات محصول"
                autoComplete="off"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
