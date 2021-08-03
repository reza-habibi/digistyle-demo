import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { TProducts } from "./type.ds";
function App() {
  const [address, setAddress] = useState({
    name: "محمدرضا حبیبی",
    mobile: "09354535833",
    province: "تهران",
    city: "اسلامشهر",
    address: "شهرک توحید ، خیابان شهید بهشتی ، کوچه شهید قاسم اکبری ، پلاک 56",
    postalCode: "1234567890",
    telephone: "56838352",
    cityCode: "021",
  });

  const [products, setProducts] = useState<TProducts[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <MobileHeader />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <HomeScreen
              {...props}
              products={products}
              loading={loading}
              error={error}
            />
          )}
        />
        <Route path="/product/:id" component={ProductScreen} />
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
        <Route
          path="/shipping"
          exact
          render={(props) => (
            <ShippingScreen
              {...props}
              address={address}
              setAddress={setAddress}
            />
          )}
        />
        <Route
          path="/checkout"
          exact
          render={(props) => <CheckoutScreen {...props} address={address} />}
        />
      </Switch>
      <Footer />
      <DesktopFooter />
    </Router>
  );
}

export default App;
