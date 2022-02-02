import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "./Logo";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const linkDesign = " my-3";

  const toggle = () => {
    setShowMenu(!showMenu);
    console.log(`Clicked showMenu toggle button, showMenu: ${!showMenu}`);
  };

  return (
    <div className="lg:hidden">
      {showMenu ? (
        <div className="">
          <div className="flex flex-row">
            <div className="z-50 w-4/5 h-screen pt-5 bg-gray-200">
              <div className="px-10">
                <Logo />
              </div>

              <div className="px-10 pt-5 text-xl">
                <ul className="flex flex-col items-center w-fit">
                  <NavLink className={linkDesign} onClick={toggle} to="/">
                    Home
                  </NavLink>
                  <NavLink className={linkDesign} onClick={toggle} to="/about">
                    About
                  </NavLink>
                  <NavLink
                    className={linkDesign}
                    onClick={toggle}
                    to="/product"
                  >
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
        <div className="flex flex-row justify-between px-10 pt-5">
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
