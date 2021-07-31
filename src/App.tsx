import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/MobileFooter";
import MobileHeader from "./components/Header/MobileHeader";
import DesktopFooter from "./components/Footer/DesktopFooter";
import CategoryScreen from "./screens/CategoryScreen";
import { Categories } from "./data";

function App() {
  return (
    <Router>
      <Header />
      <MobileHeader />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        {Categories.map((category: any, index: number) => (
          <Route key={index} path={`/category/${category.nameEn}`} render={(props) => <CategoryScreen
            {...props}
            filter={category.nameEn}
          />
          } />
        ))}
      </Switch>
      <Footer />
      <DesktopFooter />
    </Router>
  );
}

export default App;
