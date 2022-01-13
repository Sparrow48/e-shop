import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import FeturedProducts from "./components/FeturedProducts";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import ProductDetails from "./components/ProductDetails";
import { useDispatch } from "react-redux";
import { productActions } from "./store/ProductSlice";
import { ApiUrl } from "./config";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const getProducts = async () => {
        const response = await fetch(`${ApiUrl}/products.json`);
        const data = await response.json();
        //console.log(Object.values(data));
        dispatch(productActions.fetchProduct(Object.values(data)));
      };

      getProducts();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <Nav />
      <Route path="/" exact>
        <Menu />
        <Hero />
        <FeturedProducts />
      </Route>
      <Route path="/productdetails/:productId">
        <ProductDetails />
      </Route>
    </div>
  );
}

export default App;
