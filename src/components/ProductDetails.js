import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../store/CartSlice";

function ProductDetails() {
  const [value, setvalue] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const { products, show } = useSelector((state) => state.product);
  // console.log(products);
  // console.log(params.productId);
  // console.log(show);

  const filterProductById = products.filter((product) => {
    return product.id === params.productId;
  });

  const product = filterProductById[0];

  const increment = () => {
    const updateValue = value + 1;
    if (updateValue > product.Available) {
      updateValue = product.Available;
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
      cartActions.addToCart({
        id: product.id,
        title: product.title,
        value,
        price: product.price,
        image: product.image,
        Available: product.Available,
        quantity: value,
      })
    );
  };

  return (
    <div>
      {show ? (
        <div>
          {product ? (
            <div className="max-w-2xl py-16 mx-auto lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-10">
              <div className="mt-10">
                <img
                  className="rounded"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="flex flex-col space-y-5">
                <h1 className="text-4xl font-bold">{product.title}</h1>
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
                <NavLink
                  to="/cart"
                  className="px-3 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-500 w-fit"
                  onClick={addTocard}
                >
                  ADD TO CART
                </NavLink>
              </div>
            </div>
          ) : (
            <h1 className="text-5xl text-center ">Product Not found</h1>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
          <h1 className="text-2xl text-center ">Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
