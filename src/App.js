import { BrowserRouter as Router } from "react-router-dom";
import FeturedProducts from "./components/FeturedProducts";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Menu />
        <Hero />
        <FeturedProducts />
      </Router>
    </div>
  );
}

export default App;
