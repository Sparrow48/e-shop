import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

function Nav() {
  return (
    <div className=" lg:flex justify-between hidden lg:max-w-6xl mx-auto py-5  text-gray-600">
      <h1>e-Shop</h1>
      <div className=" flex space-x-8">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
      <div className="flex justify-between space-x-8">
        <NavLink className="flex space-x-1" to="/cart">
          <h1>Cart</h1>
          <Icon icon="bi:cart" color="gray" width="20" height="20" />
        </NavLink>
        <NavLink className="flex space-x-1" to="/cart">
          <h1>Login</h1>
          <Icon icon="clarity:login-line" color="gray" width="20" height="20" />
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
