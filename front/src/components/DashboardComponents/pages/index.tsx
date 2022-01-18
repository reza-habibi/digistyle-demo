import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../../../redux/actions/productAction";
import { RootState } from "../../../redux/Store/Store";
import { TProducts } from "../../../type.ds";
import MessageBox from "../../MessageBox/MessageBox";
import Humanize from "humanize-plus";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from "../../../redux/constants/productConstants";
export default function HomePage(props: { history: string[] }) {
  const productList = useSelector((state: RootState) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  const productCreate = useSelector((state: RootState) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state: RootState) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/products/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts({ name: "", mainCategoryEn: "" }));
  }, [createdProduct, dispatch, props.history, successCreate, successDelete]);
  const deleteHandler = (product: any) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product._id));
    }
  };

  const editHandler = (id: any) => {
    props.history.push(`/products/${id}/edit`);
  };

  const createHandler = () => {
    dispatch(createProduct());
  };
  return (
    <div>
      <div className="w-full space-y-10 mb-10">
        <h1>محصولات</h1>

        <button
          type="button"
          className=" bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-6 border border-black hover:border-transparent"
          onClick={createHandler}
        >
          افزودن محصول
        </button>
      </div>
      {loadingCreate && (
        <div className="flex justify-center items-center h-32">
          <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
          <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
          <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
        </div>
      )}
      {errorCreate && (
        <span className="text-red-900 bg-red-400 px-10 py-4 rounded">
          {errorCreate}
        </span>
      )}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
          <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
          <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
        </div>
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <div className="w-full m-h-screen my-5">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          شناسه محصول
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          نام محصول
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          مبلغ
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          دسته بندی
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          برند
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product: TProducts) => (
                        <tr key={product._id} className="hover:bg-gray-200">
                          <td className="px-6 py-4 text-xl whitespace-nowrap">
                            {product._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-gray-900">
                              {product.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-gray-500">
                              {Humanize.intComma(product.price)} تومان
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {product.brand}
                            </span>
                          </td>
                          <td className="px-12 py-8 whitespace-nowrap text-right text-xl font-medium">
                            <div className="inline-flex">
                              <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                onClick={() => editHandler(product._id)}
                              >
                                ویرایش
                              </button>
                              <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                onClick={() => deleteHandler(product)}
                              >
                                حذف
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
