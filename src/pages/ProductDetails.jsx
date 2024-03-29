import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, fetchProduct } from "../store/reducer/productSlice";

const ProductDetails = () => {
  const [value, setValue] = useState(1);
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { products, show = true } = useSelector((state) => state.product);
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (Object.keys(products)?.length <= 0) {
      dispatch(fetchProduct())
    }
  }, [])

  useEffect(() => {
    if (Object.keys(products)?.length > 0) {
      setProduct(products[_id])
    }
  }, [products])

  const filterProductById = Object.values(products)?.filter((product) => {
    return product.id === _id;
  });


  const increment = () => {
    let updateValue = value + 1;
    if (updateValue > product.Available) {
      updateValue = product.Available;
    }
    setValue(updateValue);
  };
  const decrement = () => {
    let updateValue = value - 1;
    if (updateValue < 1) {
      updateValue = 1;
    }
    setValue(updateValue);
  };

  const addToCard = () => {
    dispatch(
      addToCart({
        _id: product._id,
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
            <div className="max-w-2xl py-16 mx-5 lg:mx-auto lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-10">
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
                <p>Available : In Stock ({product.available})</p>
                <p>Category : {product.category}</p>
                <p>Brand : {product.brand}</p>
                <p>SKU : {product.pId}</p>
                <p className="border-b-2 border-gray-400"></p>
                <div className="flex ml-2 text-3xl font-bold space-x-7">
                  <button disabled={value === 1} onClick={decrement} className=' disabled:opacity-25'>-</button>
                  <h2>{value}</h2>
                  <button disabled={value === product?.available} onClick={increment} className=' disabled:opacity-25'>+</button>
                </div>
                <NavLink
                  to="/cart"
                  className="px-3 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-500 w-fit"
                  onClick={addToCard}
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
