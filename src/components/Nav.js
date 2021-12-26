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
        <NavLink className="flex space-x-1" to="/cart">
          <h1>Cart</h1>
          <Icon icon="bi:cart" color="gray" width="20" height="20" />
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
