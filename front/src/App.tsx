import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Categories } from "./data";
import { routes } from "./Routes/Routes";
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
      <Switch>
        {routes.map((item: any, index: number) => (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            render={(props) => <item.component {...props} />}
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
