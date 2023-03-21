import React from "react";
import 'toastr/build/toastr.min.css';
import Menu from "./components/nav/Menu";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Navigation from "./route/Navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Router>
          <Nav />
          <Menu />
          <Routes>
            <Route path={'/*'} element={<Navigation />} ></Route>
          </Routes>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
