import React from "react";
import { Route, Switch } from "react-router-dom";
import { Categories } from "../data";

function CategoryRoutes() {
  return (
    <Switch>
      {Categories.map((item: any, index: number) => (
        <Route />
      ))}
    </Switch>
  );
}

export default CategoryRoutes;
