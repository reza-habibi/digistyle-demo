import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Categories } from "./data";
import { routes } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import CustomRoute from "./Routes/CustomRoute";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/MobileFooter"));
const MobileHeader = lazy(() => import("./components/Header/MobileHeader"));
const DesktopFooter = lazy(() => import("./components/Footer/DesktopFooter"));
const CategoryScreen = lazy(() => import("./screens/CategoryScreen"));
const SubCategory = lazy(() => import("./screens/SubCategoryScreen"));

function App() {
  return (
    <Router>
      <Header />
      <MobileHeader />
      <ToastContainer />
      <Switch>
        {routes.map((item: any, index: number) => (
          <CustomRoute
            key={index}
            path={item.path}
            exact={item.exact}
            isLogin={item.isLogin}
            Component={item.component}
            isAdmin={item.isAdmin}
          />
        ))}
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
      </Switch>
      <Footer />
      <DesktopFooter />
    </Router>
  );
}

export default App;
