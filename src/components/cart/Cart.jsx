import React from "react";
import { NavLink } from "react-router-dom";
import CartItems from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import CheckOutDetails from "./CheckOutDetails";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  // console.log(items);

  const removeAllItems = () => {
    dispatch(cartActions.removeAllItems());
  };

  return (
    <div>
      <div>
        {items.length > 0 ? (
          <div className="max-w-2xl py-16 mx-5 lg:mx-auto md:max-w-4xl lg:max-w-6xl ">
            <div className="hidden md:grid">
              <div className="grid gap-4 justify-items-center grid-cols-cart_title">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <span>Remove</span>
              </div>
              <p className="pt-3 border-b border-gray-300"></p>
            </div>
            <div>
              {items.map((item) => (
                <CartItems
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  subTotal={item.subTotal}
                  Available={item.Available}
                />
              ))}
            </div>
            <div>
              <p className="pb-3 border-t border-gray-300"></p>
              <div className="flex justify-between ">
                <NavLink
                  to="/product"
                  className="px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-400"
                >
                  Continue Shoping
                </NavLink>
                <button
                  onClick={removeAllItems}
                  className="px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-400"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div className="flex items-end justify-end py-10">
              <CheckOutDetails
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50">
            <h1 className="text-2xl text-center ">No product in cart</h1>
            <p> This page will be updated very soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
