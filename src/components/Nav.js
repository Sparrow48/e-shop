import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "./Logo";

function Nav() {
  return (
    <div className="justify-between hidden py-5 mx-auto text-gray-600 lg:flex lg:max-w-6xl">
      <div>
        <Logo />
      </div>
      <div className="flex space-x-8 ">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
      <div className="flex justify-between space-x-8">
        <NavLink to="/cart">
          <div className="flex space-x-1 group hover:text-yellow-600">
            <h1> Cart</h1>

            <span className="relative flex items-center">
              <Icon
                className=" group-hover:fill-yellow-600"
                icon="bi:cart"
                color="gray"
                width="20"
                height="20"
              />
              <span className="absolute flex items-center justify-center w-4 h-4 p-3 text-white transition-all duration-300 bg-yellow-600 rounded-full group-hover:bg-gray-800 top-10px right-16px ">
                1
              </span>
            </span>
          </div>
        </NavLink>
        <NavLink className="flex space-x-1" to="/login">
          <h1>Login</h1>
          <Icon icon="clarity:login-line" color="gray" width="20" height="20" />
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
