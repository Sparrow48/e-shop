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
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/footer/Footer";
import Checkout from "./components/checkout/Checkout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchProduct(ApiUrl));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-between h-screen">
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
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
