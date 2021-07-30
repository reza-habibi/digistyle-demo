import React from "react";
import { Link } from "react-router-dom";
import { Comment } from "../../../data";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { command } from "yargs";
function ProductFeatureTab() {
  return (
    <Tabs className="hidden sm:block">
      <TabList>
        <Tab>ویژگی محصول</Tab>
        <Tab>نظرات کاربران</Tab>
      </TabList>
      <TabPanel>
        <span className="text-3xl text-gray-500">مشخصات</span>
      </TabPanel>
      <TabPanel>
        <div className="w-2/3 mx-auto divide-gray-500 divide-opacity-50 divide-y space-y-10">
          {Comment.map((item: any, index: number) => (
            <div className="w-full flex flex-col items-star space-y-5">
              <span className="text-4xl text-black-600">{item.title}</span>
              <span className="text-2xl text-gray-400">{item.author}</span>
              <p className="text-justify text-2xl text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
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
