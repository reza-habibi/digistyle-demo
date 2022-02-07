import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/Store/Store";

export default function HomePage() {
  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo } = userSignin;
console.log(userInfo)
  const cart = useSelector((state: RootState) => state.cart);
  const { shippingAddress } = cart;

  return (
    <>
      <div className="w-full flex flex-col lg:grid lg:grid-cols-5 gap-2 mb-5">
        <div className="col-span-3 w-full">
          <div className="bg-wild-sand p-4">
            <span className="text-2xl text-gray-900">نام و نام خانوادگی :</span>
            <span className="text-2xl text-gray-600 mr-2">
              {userInfo.fullName}{" "}
            </span>
          </div>
          <div className="bg-wild-sand-600 p-4">
            <span className="text-2xl text-gray-900">پست الکترونیک :</span>
            <span className="text-2xl text-gray-600 mr-2">
              {userInfo.email}{" "}
            </span>
          </div>
          <div className="bg-wild-sand p-4">
            <span className="text-2xl text-gray-900">کد ملی :</span>
            <span className="text-2xl text-gray-600 mr-2"> 1234567890 </span>
          </div>
          <div className="bg-wild-sand-600 p-4">
            <span className="text-2xl text-gray-900">شماره تلفن ثابت :</span>
            <span className="text-2xl text-gray-600 mr-2">
              {shippingAddress?.telephone.slice(5)}*****{" "}
              {shippingAddress?.cityCode}{" "}
            </span>
          </div>

          <div className="bg-wild-sand p-4">
            <span className="text-2xl text-gray-900">شماره تلفن همراه :</span>
            <span className="text-2xl text-gray-600 mr-2">
              {" "}
              {shippingAddress?.mobile}{" "}
            </span>
          </div>
        </div>
        <div className="col-span-2 w-full">
          <div className="bg-wild-sand p-4">
            <span className="text-2xl text-gray-900">تاریخ تولد :</span>
            <span className="text-2xl text-gray-600 mr-2">1372/10/02</span>
          </div>
          <div className="bg-wild-sand-600 p-4">
            <span className="text-2xl text-gray-900">جنسیت :</span>
            <span className="text-2xl text-gray-600 mr-2">مرد </span>
          </div>
          <div className="bg-wild-sand p-4">
            <span className="text-2xl text-gray-900">محل سکونت :</span>
            <span className="text-2xl text-gray-600 mr-2">
              {" "}
              {shippingAddress?.province} ، {shippingAddress?.city}{" "}
            </span>
          </div>
          <div className="bg-wild-sand-600 p-4">
            <span className="text-2xl text-gray-900">دریافت خبرنامه :</span>
            <span className="text-2xl text-gray-600 mr-2">خیر</span>
          </div>

          <div className="bg-wild-sand p-4">
            <span className="text-2xl text-gray-900">شماره کارت :</span>
            <span className="text-2xl text-gray-600 mr-2"></span>
          </div>
        </div>
      </div>
      <Link to="/profile/change-info" className="bg-transparent hover:bg-black text-black font-normal hover:text-white py-4 px-4 border border-black hover:border-transparent ">
        تغییر اطلاعات حساب کاربری
      </Link>
    </>
  );
}
