import { Route } from "react-router-dom";
import FeturedProducts from "./components/FeturedProducts";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/" exact>
        <Menu />
        <Hero />
        <FeturedProducts />
      </Route>
      <Route path="/productdetails">
        <ProductDetails />
      </Route>
    </div>
  );
}

export default App;
