import React from "react";

function CheckOutDetails(props) {
  const totalPrice = props.totalPrice + 1200;
  const style = "grid  grid-cols-checkout_item gap-32";
  return (
    <div className="flex flex-col items-end justify-end space-y-4">
      <div className="flex flex-col p-5 space-y-4 border rounded hover:border-0 hover:shadow-lg w-fit h-fit ">
        <div className={`${style} font-semibold`}>
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
        <div className={`${style} text-2xl font-bold`}>
          <p>Order Total :</p>
          <p>৳{totalPrice}</p>
        </div>
      </div>
      <div className="">
        <button className="px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-400">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CheckOutDetails;
