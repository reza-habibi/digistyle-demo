import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const mainCategory = [
  { name: "مردانه", category: "Mens" },
  { name: "زنانه", category: "Women" },
  { name: "بچگانه", category: "Kids" },
  { name: "زیبایی و سلامت", category: "Beauty&Health" },
];

function ProductCategoryCard() {
  return (
      <Tabs >
        <TabList >
          {mainCategory.map((item, index) => (
            <Tab key={index} >{item.name}</Tab>
          ))}
        </TabList>
        <TabPanel></TabPanel>
      </Tabs>
  );
}

export default ProductCategoryCard;
