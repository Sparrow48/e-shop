import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
