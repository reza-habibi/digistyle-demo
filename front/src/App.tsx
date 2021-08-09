import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Categories } from "./data";
const ProductScreen = lazy(() => import("./screens/ProductScreen"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/MobileFooter"));
const MobileHeader = lazy(() => import("./components/Header/MobileHeader"));
const DesktopFooter = lazy(() => import("./components/Footer/DesktopFooter"));
const CategoryScreen = lazy(() => import("./screens/CategoryScreen"));
const SubCategory = lazy(() => import("./screens/SubCategoryScreen"));
const CartScreen = lazy(() => import("./screens/CartScreen"));
const ShippingScreen = lazy(() => import("./screens/ShippingScreen"));
const CheckoutScreen = lazy(() => import("./screens/CheckoutScreen"));
const SigninScreen = lazy(() => import("./screens/SigninScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const OrderScreen = lazy(() => import("./screens/OrderScreen"));
const OrderHistoryScreen = lazy(() => import("./screens/OrderHistoryScreen"));
const ProfileScreen = lazy(() => import("./screens/ProfileScreen"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
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
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/orderhistory" component={OrderHistoryScreen}/>
        <Route path="/profile" component={ProfileScreen} />
      </Switch>
      <Footer />
      <DesktopFooter />
    </Router>
  );
}

export default App;
