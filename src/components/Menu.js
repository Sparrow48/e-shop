import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
    console.log(`Clicked showMenu toggle button, showMenu: ${!showMenu}`);
  };

  return (
    <nav className="lg:hidden">
      {showMenu ? (
        <div className="flex flex-row">
          <div className="bg-gray-50 h-screen w-4/5 z-50">
            <h1>e-Shop</h1>
            <ul className="flex flex-col">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/product">Product</NavLink>
            </ul>
          </div>
          <div
            className="items-end bg-gray-700 w-1/5 h-screen"
            onClick={toggle}
          ></div>
        </div>
      ) : (
        <div className="flex flex-row justify-between px-5">
          <h1>e-Shop</h1>
          <Icon
            icon="bx:bx-menu-alt-right"
            color="blue"
            width="48"
            height="48"
            onClick={toggle}
          />
        </div>
      )}
    </nav>
  );
}

export default Menu;
