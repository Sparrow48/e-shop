import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import FeturedProducts from "./components/FeturedProducts";
import Hero from "./components/Hero";
import Menu from "./components/nav/Menu";
import Nav from "./components/nav/Nav";
import ProductDetails from "./components/product/ProductDetails";
import { useDispatch } from "react-redux";
import { fetchProduct } from "./store/ProductSlice";
import { ApiUrl } from "./config";
import Cart from "./components/cart/Cart";
import AboutUs from "./components/AboutUs";
import Products from "./components/product/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchProduct(ApiUrl));
      console.log("app");
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Menu />
      <Route path="/" exact>
        <Hero />
        <FeturedProducts />
      </Route>
      <Route path="/product">
        <Products />
      </Route>
      <Route path="/productdetails/:productId">
        <ProductDetails />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/about">
        <AboutUs />
      </Route>
    </div>
  );
}

export default App;
