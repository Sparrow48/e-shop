import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sofa from "../assets/FP2.png";
import { cartActions } from "../store/CartSlice";

function ProductDetails() {
  const [value, setvalue] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const product = products["product1"];

  const increment = () => {
    const updateValue = value + 1;
    if (updateValue > 6) {
      updateValue = 6;
    }
    setvalue(updateValue);
  };
  const decrement = () => {
    const updateValue = value - 1;
    if (updateValue < 1) {
      updateValue = 1;
    }
    setvalue(updateValue);
  };

  const addTocard = () => {
    dispatch(
      cartActions.addToCard({
        id: "a1",
        title: " sofa",
        value,
        price: 7500,
      })
    );
  };

  return (
    <div>
      {product && (
        <div className="max-w-2xl py-16 mx-auto lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="mt-10">
            <img className="rounded" src={product.image} alt="soofa" />
          </div>
          <div className="flex flex-col space-y-5">
            <h1 className="text-4xl font-bold">Sofa</h1>
            <h2 className="text-xl text-yellow-600">{product.price} tk</h2>
            <p className="leading-8 text-gray-600">{product.description}</p>
            <p>Available : In Stock ({product.Available})</p>
            <p>Category : {product.category}</p>
            <p>Brand : {product.brand}</p>
            <p>SKU : {product.psn}</p>
            <p className="border-b-2 border-gray-400"></p>
            <div className="flex ml-2 text-3xl font-bold space-x-7">
              <button onClick={decrement}>-</button>
              <h2>{value}</h2>
              <button onClick={increment}>+</button>
            </div>
            <a
              href="/"
              className="px-3 py-2 bg-yellow-600 rounded w-fit"
              onClick={addTocard}
            >
              ADD TO CART
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
