import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "./Logo";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
    console.log(`Clicked showMenu toggle button, showMenu: ${!showMenu}`);
  };

  return (
    <div className="lg:hidden">
      {showMenu ? (
        <div className="">
          <div className="flex flex-row">
            <div className="w-4/5 ">
              <div className="px-5">
                <Logo />
              </div>

              <div className="z-50 h-screen px-10 text-xl bg-gray-50">
                <ul className="flex flex-col">
                  <NavLink onClick={toggle} to="/home">
                    Home
                  </NavLink>
                  <NavLink onClick={toggle} to="/about">
                    About
                  </NavLink>
                  <NavLink onClick={toggle} to="/product">
                    Product
                  </NavLink>
                </ul>
              </div>
            </div>

            <div
              className="items-end w-2/5 h-screen bg-gray-700"
              onClick={toggle}
            ></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between px-5">
          <Logo />
          <Icon
            icon="bx:bx-menu-alt-right"
            color="blue"
            width="48"
            height="48"
            onClick={toggle}
          />
        </div>
      )}
    </div>
  );
}

export default Menu;
