import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import FP1 from "../assets/FP1.png";
import FP2 from "../assets/FP2.png";
import FP4 from "../assets/FP4.png";

function FeturedProducts() {
  const products = useSelector((state) => state.product.products);

  return (
    <div>
      {products && (
        <div className="py-10 bg-slate-200">
          <div className="max-w-2xl mx-auto lg:max-w-6xl ">
            <h1 className="text-3xl text-center ">Featured Products</h1>
            <p className="w-24 mx-auto border-b-4 border-yellow-600"></p>
            <div className="flex flex-col items-center justify-center py-16 space-y-12 sm:space-y-16 sm:py-24 lg:space-y-0 lg:space-x-20 lg:flex-row">
              {products.map((product) => (
                <Product
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                />
              ))}
            </div>
            <div className="lg:pt-12">
              <div className="px-3 py-2 mx-auto text-center text-white bg-yellow-600 rounded w-fit hover:bg-yellow-500 hover:text-gray-800">
                <a href="/products">All Products</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeturedProducts;
