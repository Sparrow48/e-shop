import React from "react";
import { NavLink } from "react-router-dom";

const CheckOutDetails = (props) => {
  const totalPrice = props.totalPrice + 1200;
  const style = "grid  grid-cols-checkout_item gap-8 md:gap-32";
  return (
    <div className="flex flex-col items-end justify-end space-y-4">
      <div className="flex flex-col p-5 space-y-4 rounded shadow-xl w-fit h-fit ">
        <div className={`${style} font-medium md:font-semibold`}>
          <p>Subtotal :</p>
          <p>৳{props.totalPrice}</p>
        </div>
        <div className={`${style}`}>
          <p>Shipping Fee :</p>
          <p>৳1200</p>
        </div>
        <div>
          <p className="border-b "></p>
        </div>
        <div
          className={`${style} text-xl md:text-2xl font-medium md:font-bold`}
        >
          <p>Order Total :</p>
          <p>৳{totalPrice}</p>
        </div>
      </div>

      {props.flag === "true" ? (
        <div className="">
          <NavLink
            to="/checkout"
            className="px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-400"
          >
            CHECKOUT
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}

export default CheckOutDetails;
