import React from "react";
import { useSelector } from "react-redux";
import ShowProduct from "./ShowProduct";

function Product() {
  const products = useSelector((state) => state.product.products);
  return (
    <div>
      {products && (
        <div className="flex max-w-6xl mx-auto ">
          <div className="max-w-2xl">
            <h1 className="h-screen bg-gray-300 w-72 ">Sort</h1>
          </div>
          <div className="grid max-w-3xl grid-cols-3 gap-x-5 gap-y-24">
            {products.map((product) => (
              <ShowProduct
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
