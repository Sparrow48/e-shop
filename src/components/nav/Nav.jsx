import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProfileDropdown from "./ProfileDropdown";
import Logo from "./Logo";

const Nav = () => {
  const { totalQuantity } = useSelector((state) => state.product);
  let isLoggedIn = localStorage.getItem('sessionId') ? true : false;

  return (
    <div className="border-b  sticky top-0 z-50 bg-white">
      <div className="justify-between hidden py-5 mx-auto text-gray-600 pt-7 md:flex md:max-w-6xl">
        <div>
          <Logo />
        </div>
        <div className="flex space-x-8 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/about">About</NavLink>
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
                  {totalQuantity}
                </span>
              </span>
            </div>
          </NavLink>

          {isLoggedIn ? (
            <ProfileDropdown />
          ) : (
            <NavLink className="flex space-x-1" to="/login">
              <h1>Login</h1>
              <Icon
                icon="clarity:login-line"
                color="gray"
                width="20"
                height="20"
              />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;

// <NavLink to='/profile' className='text-white font-medium'><img src={CP} className='relative mx-auto rounded-full overflow-hidden w-8 h-8' alt="" /></NavLink>