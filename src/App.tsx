import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/MobileFooter";
import MobileHeader from "./components/Header/MobileHeader";
import DesktopFooter from "./components/Footer/DesktopFooter";

function App() {
  return (
    <Router>
      <Header />
      <MobileHeader />
      <main className="bg-gray-200 ">
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <Footer />
      <DesktopFooter/>
    </Router>
  );
}

export default App;
