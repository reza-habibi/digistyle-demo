import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Categories } from "../../data";
function ProductCategoryCard() {
  return (
    <Tabs className="hidden sm:block">
      <TabList>
        {Categories.map((item, index) => (
          <Tab key={index}>{item.name}</Tab>
        ))}
      </TabList>
      {Categories.map((item: any, index: number) => (
        <TabPanel key={index}>
          <div className={`grid grid-cols-${item.gridCol} gap-4 mb-2 pb-2`}>
            {item.subCategory.map((subCat: any, index: number) => (
              <div key={index} className={`group h-auto relative ${subCat.colSpan?"col-span-"+subCat.colSpan:''}`}>
                <Link to={subCat.url}>
                  <figure className="overflow-hidden w-full">
                    <img
                      className="group-hover:scale-110 transition-all duration-500  transform 	origin-center  transform 	origin-center	"
                      src={subCat.image}
                      alt={subCat.name}
                    />
                  </figure>
                </Link>
                <span className="bg-white lg:text-3xl sm:text-xl md:text-2xl group-hover:text-black text-gray-400 transition duration-500 absolute bottom-0 p-3">
                  {subCat.name}
                </span>
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default ProductCategoryCard;
