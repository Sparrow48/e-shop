import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShowProduct from "./ShowProduct";
import { fetchProduct } from "../../store/reducer/productSlice";

const FeaturedProducts = () => {

  const { products } = useSelector(state => state.product)

  const dispatch = useDispatch()


  useEffect(() => {
    if (Object.keys(products).length <= 0) {
      dispatch(fetchProduct())
    }
  }, [])

  return (
    <div>
      {Object.keys(products).length && (
        <div className="py-10 bg-slate-200">
          <div className="max-w-2xl mx-auto px-4  lg:max-w-6xl ">
            <h1 className="text-3xl text-center ">Featured Products</h1>
            <p className="w-24 mx-auto border-b-4 border-yellow-600"></p>
            <div className="flex flex-col items-center justify-center py-16 space-y-5 sm:space-y-8 sm:py-12 lg:space-y-0 lg:space-x-8 lg:flex-row">
              {Object.values(products).slice(0, 3).map((product) => (
                <ShowProduct
                  key={product._id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  _id={product._id}
                />
              ))}
            </div>
            <div className="lg:pt-6">
              <div className="px-3 py-2 mx-auto text-center text-white bg-yellow-600 rounded w-fit hover:bg-yellow-500 hover:text-gray-800">
                <NavLink to="/product">All Products</NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;
