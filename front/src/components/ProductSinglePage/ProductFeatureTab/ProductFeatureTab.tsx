import { Tab } from "@headlessui/react";
import { TProducts } from "../../../type.ds";
import { Comment } from "../../../data";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store/Store";
import { useEffect, useState } from "react";
import { PRODUCT_REVIEW_CREATE_RESET } from "../../../redux/constants/productConstants";
import { createReview } from "../../../redux/actions/productAction";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductFeatureTab({ product }: { product: any }) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo } = userSignin;
  const productId = product._id;
  const productReviewCreate = useSelector(
    (state: RootState) => state.productReviewCreate
  );
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [subject, setSubject] = useState("");
  useEffect(() => {
    if (successReviewCreate) {
      window.alert("Review Submitted Successfully");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
  }, [dispatch, successReviewCreate]);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, {
          rating,
          comment,
          fullName: userInfo.fullName,
          subject,
        })
      );
    } else {
      alert("Please enter comment and rating");
    }
  };

  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-6 text-2xl leading-5 font-medium text-pink-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-pink-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-black"
              )
            }
          >
            مشخصات محصول
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-6 text-2xl leading-5 font-medium text-pink-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-pink-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-black"
              )
            }
          >
            نظرات کاربران
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            <table className="w-full divide-y divide-opacity-50 space-y-5">
              <tbody>
                <tr className="w-full flex flex-col md:flex-row items-center justify-between py-4">
                  <td className="md:w-2/12 px-4 text-gray-600 text-xl">برند</td>
                  <td className="md:w-10/12 px-4  text-gray-800 text-xl">
                    {product.brandFa}
                  </td>
                </tr>

                <tr className="w-full flex flex-col md:flex-row items-center justify-between py-4 bg-gray-200">
                  <td className="md:w-2/12 px-4 text-gray-600 text-xl">جنس</td>
                  <td className="md:w-10/12 px-4  text-gray-800 text-xl">
                    نخی
                  </td>
                </tr>

                <tr className="w-full flex flex-col md:flex-row items-center justify-between py-4">
                  <td className="md:w-2/12 px-4 text-gray-600 text-xl">سایز</td>
                  <td className="md:w-10/12 px-4  text-gray-800 text-xl">
                    s,m,l,xl
                  </td>
                </tr>

                <tr className="w-full flex flex-col md:flex-row items-center justify-between py-4 bg-gray-200">
                  <td className="md:w-2/12 px-4 text-gray-600 text-xl">
                    کیفیت
                  </td>
                  <td className="md:w-10/12 px-4  text-gray-800 text-xl">
                    اورجینال
                  </td>
                </tr>

                <tr className="w-full flex flex-col md:flex-row items-center justify-between py-4">
                  <td className="md:w-2/12 px-4 text-gray-600 text-xl">
                    کشور تولیدکننده
                  </td>
                  <td className="md:w-10/12 px-4  text-gray-800 text-xl">
                    آلمان
                  </td>
                </tr>

                <tr className="w-full flex flex-col md:flex-row items-center justify-between py-4 bg-gray-200">
                  <td className="md:w-2/12 px-4 text-gray-600 text-xl">طرح</td>
                  <td className="md:w-10/12 px-4  text-gray-800 text-xl">
                    ساده
                  </td>
                </tr>
              </tbody>
            </table>{" "}
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            <div className="w-2/3 mx-auto divide-gray-500 divide-opacity-50 divide-y space-y-10">
              <table className="w-full divide-opacity-50 divide-y">
                <tbody>
                  {Comment.map((item: any, index: number) => (
                    <tr
                      className="w-full flex flex-col lg:flex-row  py-3 items-center justify-between"
                      key={index}
                    >
                      <td className="lg:w-2/12 px-4 text-gray-600 text-xl text-lg">
                        <div className="stars">
                          {" "}
                          <span className="text-yellow-500	">
                            <i
                              className={
                                item.rating >= 5
                                  ? "fa fa-star"
                                  : item.rating >= 4.5
                                  ? "fa fa-star-half-o"
                                  : "fa fa-star-o"
                              }
                            ></i>
                          </span>
                          <span className="text-yellow-500	">
                            <i
                              className={
                                item.rating >= 4
                                  ? "fa fa-star"
                                  : item.rating >= 3.5
                                  ? "fa fa-star-half-o"
                                  : "fa fa-star-o"
                              }
                            ></i>
                          </span>
                          <span className="text-yellow-500	">
                            <i
                              className={
                                item.rating >= 3
                                  ? "fa fa-star"
                                  : item.rating >= 2.5
                                  ? "fa fa-star-half-o"
                                  : "fa fa-star-o"
                              }
                            ></i>
                          </span>
                          <span className="text-yellow-500	">
                            <i
                              className={
                                item.rating >= 2
                                  ? "fa fa-star"
                                  : item.rating >= 1.5
                                  ? "fa fa-star-half-o"
                                  : "fa fa-star-o"
                              }
                            ></i>
                          </span>
                          <span className="text-yellow-500	">
                            <i
                              className={
                                item.rating >= 1
                                  ? "fa fa-star"
                                  : item.rating >= 0.5
                                  ? "fa fa-star-half-o"
                                  : "fa fa-star-o"
                              }
                            ></i>
                          </span>
                        </div>
                        <span>1400/02/06</span>
                        <p>{item.fullName}</p>
                        <div className="w-2/3 flex md:flex-col justify-around items-center pt-3 cursor-pointer pr-3 md:pr-0">
                          <div className="w-full flex justify-between items-center">
                            <AiOutlineLike className="text-2xl text-green-500" />
                            <span className="text-xl text-green-500 font-sans">
                              +3
                            </span>
                          </div>
                          <div className="w-full flex justify-between items-center mt-2 cursor-pointer md:pr-0">
                            <AiOutlineDislike className="text-2xl text-red-500" />
                            <span className="text-xl text-red-500 font-sans">
                              +3
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="lg:w-10/12 px-4  text-gray-600 text-2xl flex flex-col">
                        <span className="text-gray-800 text-2xl">
                          {item.description}
                        </span>
                        <p className="text-gray-600 text-xl">{item.comment}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {userInfo && (
                <form className=" space-y-8 pt-10" onSubmit={submitHandler}>
                  <span className="text-2xl text-black">
                    لطفا قبل از نوشتن نظر خود در مورد این محصول، قوانین و ضوابط
                    را مطالعه کنید.
                  </span>
                  <div>
                    <label htmlFor="rating">امتیازدهی : </label>
                    <select
                      id="rating"
                      value={rating}
                      className="bg-white text-gray-400 appearance-none border-none inline-block py-3 pl-3 pr-8 mr-3 rounded leading-tight"
                      onChange={(e) => setRating(parseInt(e.target.value))}
                    >
                      <option value="">امتیاز ...</option>
                      <option value="1">1- ضعیف</option>
                      <option value="2">2- متوسط</option>
                      <option value="3">3- خوب</option>
                      <option value="4">4- خیلی خوب</option>
                      <option value="5">5- عالی</option>
                    </select>
                  </div>
                  <label className="block border-b">
                    <input
                      className="form-textarea text-2xl block w-full border-none "
                      placeholder="عنوان نظر"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </label>
                  <label className="block border-b">
                    <textarea
                      className="form-textarea text-2xl block w-full border-none "
                      rows={3}
                      placeholder="نظر خود را بنویسید..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </label>
                  <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-6 "
                  >
                    ثبت نظر
                  </button>
                  {loadingReviewCreate && (
                    <div className="flex justify-center items-center h-32">
                      <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
                      <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
                      <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
                    </div>
                  )}
                  {errorReviewCreate && (
                    <span className="text-red-800 bg-red-500 px-10 py-4">
                      {errorReviewCreate}
                    </span>
                  )}
                </form>
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
