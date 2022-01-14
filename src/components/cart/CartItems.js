import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { cartActions } from "../../store/CartSlice";

function CartItems(props) {
  const dispatch = useDispatch();

  const opacity =
    props.Available === props.quantity ? "opacity-25" : "opacity-100";

  const increment = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        price: props.price,
        quantity: 1,
      })
    );
  };

  const removeItem = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id: props.id,
        price: props.price,
        quantity: props.quantity,
        singleUnit: false,
      })
    );
  };

  const decrement = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id: props.id,
        price: props.price,
        quantity: 1,
        singleUnit: true,
      })
    );
  };

  return (
    <div className="grid items-center justify-center gap-4 py-6 text-center grid-cols-cart_title">
      <div className="grid items-center justify-center gap-4 text-left grid-cols-cart_img">
        <img className="object-cover rounded " src={props.image} alt="" />
        <h1 className="text-sm font-semibold ">{props.title}</h1>
      </div>
      <p>{props.price}</p>
      <div>
        <div className="flex items-center justify-center space-x-5 text-2xl font-semibold">
          <button onClick={decrement} className="cursor-not-allowed">
            -
          </button>
          <h2>{props.quantity}</h2>
          <button
            onClick={increment}
            disabled={props.Available === props.quantity}
            className={opacity}
          >
            +
          </button>
        </div>
      </div>

      <p>{props.subTotal}</p>
      <div>
        <button
          onClick={removeItem}
          className="px-2 py-2 bg-red-600 rounded hover:bg-red-500"
        >
          <Icon icon="ant-design:delete-filled" color="white" />
        </button>
      </div>
    </div>
  );
}

export default CartItems;
