import React from "react";
import { NavLink } from "react-router-dom";
import eShop from './../../assets/eShop.png'

const Logo = () => {
  return (
    <div className="text-2xl text-yellow-600 font-logo">
      <NavLink to="/">
        <img src={eShop} alt="" width='120px' />
      </NavLink>
    </div>
  );
}

export default Logo;
