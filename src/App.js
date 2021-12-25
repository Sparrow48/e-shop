import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Menu />
      </Router>
    </div>
  );
}

export default App;
