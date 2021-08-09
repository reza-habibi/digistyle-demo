import { Comment } from "../../../data";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
function ProductFeatureTab({ product }: any) {
  return (
    <Tabs className="hidden sm:block">
      <TabList>
        <Tab>ویژگی محصول</Tab>
        <Tab>نظرات کاربران</Tab>
      </TabList>
      <TabPanel>
        <table className="w-full divide-y divide-opacity-50 space-y-5">
          <tbody>
            <tr className="w-full flex flex-col md:flex-row items-center justify-between">
              <td className="md:w-2/12 px-4 text-gray-400 text-xl">برند</td>
              <td className="md:w-10/12 px-4  text-gray-700 text-lg">
                {product.brandFa}
              </td>
            </tr>

            <tr className="w-full flex flex-col md:flex-row items-center justify-between">
              <td className="md:w-2/12 px-4 text-gray-400 text-xl">جنس</td>
              <td className="md:w-10/12 px-4  text-gray-700 text-lg">نخی</td>
            </tr>

            <tr className="w-full flex flex-col md:flex-row items-center justify-between">
              <td className="md:w-2/12 px-4 text-gray-400 text-xl">سایز</td>
              <td className="md:w-10/12 px-4  text-gray-700 text-lg">
                s,m,l,xl
              </td>
            </tr>

            <tr className="w-full flex flex-col md:flex-row items-center justify-between">
              <td className="md:w-2/12 px-4 text-gray-400 text-xl">کیفیت</td>
              <td className="md:w-10/12 px-4  text-gray-700 text-lg">
                اورجینال
              </td>
            </tr>

            <tr className="w-full flex flex-col md:flex-row items-center justify-between">
              <td className="md:w-2/12 px-4 text-gray-400 text-xl">
                کشور تولیدکننده
              </td>
              <td className="md:w-10/12 px-4  text-gray-700 text-lg">آلمان</td>
            </tr>

            <tr className="w-full flex flex-col md:flex-row items-center justify-between">
              <td className="md:w-2/12 px-4 text-gray-400 text-xl">طرح</td>
              <td className="md:w-10/12 px-4  text-gray-700 text-lg">ساده</td>
            </tr>
          </tbody>
        </table>
      </TabPanel>
      <TabPanel>
        <div className="w-2/3 mx-auto divide-gray-500 divide-opacity-50 divide-y space-y-10">
          <table className="w-full divide-opacity-50 divide-y">
            <tbody>
              {Comment.map((item: any, index: number) => (
                <tr
                  className="w-full flex flex-col lg:flex-row  py-3 items-center justify-between"
                  key={index}
                >
                  <td className="lg:w-2/12 px-4 text-gray-400 text-xl text-lg">
                    <span>1400/02/06</span>
                    <p>{item.author}</p>
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
                  <td className="lg:w-10/12 px-4  text-gray-600 text-2xl">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" space-y-8 pt-10">
            <span className="text-2xl text-black">
              لطفا قبل از نوشتن نظر خود در مورد این محصول، قوانین و ضوابط را
              مطالعه کنید.
            </span>
            <label className="block border-b">
              <input
                className="form-textarea text-2xl block w-full border-none "
                placeholder="عنوان نظر"
              />
            </label>
            <label className="block border-b">
              <textarea
                className="form-textarea text-2xl block w-full border-none "
                rows={3}
                placeholder="نظر خود را بنویسید..."
              ></textarea>
            </label>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-6 ">
              ثبت نظر
            </button>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default ProductFeatureTab;
