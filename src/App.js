import { BrowserRouter as Router } from "react-router-dom";
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
      </Router>
    </div>
  );
}

export default App;
