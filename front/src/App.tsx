import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/MobileFooter";
import MobileHeader from "./components/Header/MobileHeader";
import DesktopFooter from "./components/Footer/DesktopFooter";
import CategoryScreen from "./screens/CategoryScreen";
import { Categories } from "./data";
import SubCategory from "./screens/SubCategoryScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <Router>
      <Header />
      <MobileHeader />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/products/:id" component={ProductScreen} />

        {Categories.map((category: any, index: number) => (
          <Route
            key={index}
            path={category.URL}
            exact
            render={(props) => (
              <CategoryScreen {...props} filter={category.nameEn} />
            )}
          />
        ))}

        {Categories.map((item: any) =>
          item.subCategory.map((category: any, index: number) => (
            <Route key={index} path={category.url} component={SubCategory} />
          ))
        )}
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/shipping" exact component={ShippingScreen} />
        <Route path="/checkout" exact component={CheckoutScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
      </Switch>
      <Footer />
      <DesktopFooter />
    </Router>
  );
}

export default App;
