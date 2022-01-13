import React from "react";
import { Icon } from "@iconify/react";

function CartItems(props) {
  return (
    <div className="grid items-center justify-center gap-4 py-10 text-center grid-cols-cart_title">
      <div className="grid items-center justify-center gap-4 text-left grid-cols-cart_img">
        <img className="object-cover rounded " src={props.image} alt="" />
        <h1 className="text-sm font-semibold ">{props.title}</h1>
      </div>
      <p>{props.price}</p>
      <div>
        <div className="flex items-center justify-center space-x-5 text-2xl font-semibold">
          <button>-</button>
          <h2>{props.quantity}</h2>
          <button>+</button>
        </div>
      </div>

      <p>{props.subTotal}</p>
      <div>
        <button className="px-2 py-2 bg-red-600 rounded hover:bg-red-500">
          <Icon icon="ant-design:delete-filled" color="white" />
        </button>
      </div>
    </div>
  );
}

export default CartItems;
