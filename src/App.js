import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import FeturedProducts from "./components/FeturedProducts";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import ProductDetails from "./components/ProductDetails";
import { useDispatch } from "react-redux";
import { fetchProduct } from "./store/ProductSlice";
import { ApiUrl } from "./config";
import Cart from "./components/cart/Cart";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";

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

  // useEffect(() => {
  //   try {
  //     const getProducts = async () => {
  //       const response = await fetch(`${ApiUrl}/products.json`);
  //       const data = await response.json();
  //       // console.log(Object.values(data));
  //       // console.log(data);
  //       dispatch(productActions.fetchProduct(Object.values(data)));
  //     };

  //     getProducts();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  return (
    <div>
      <Nav />
      <Menu />
      <Route path="/" exact>
        <Hero />
        <FeturedProducts />
      </Route>
      <Route path="/product">
        <Product />
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
