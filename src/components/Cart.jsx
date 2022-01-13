import React from "react";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <div className="max-w-2xl py-16 mx-auto lg:max-w-6xl ">
      <div>
        <div className="grid gap-4 justify-items-center grid-cols-cart_title">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <span></span>
        </div>
        <p className="pt-3 border-b border-gray-300"></p>
      </div>
      <div>
        <h1 className="py-10 text-center ">cartItems</h1>
      </div>
      <div>
        <p className="pb-3 border-t border-gray-300"></p>
        <div className="flex justify-between ">
          <NavLink
            to="/products"
            className="px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-400"
          >
            Continue Shoping
          </NavLink>
          <button className="px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-400">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
