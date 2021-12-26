import React from "react";

function Product(props) {
  return (
    <div className="flex flex-col space-y-3 w-60 h-72">
      <div className="">
        <img
          className="object-cover h-64 w-60"
          src={props.image}
          alt="Fetured_products"
        />
      </div>
      <div className="flex justify-between">
        <h1 className="text-gray-600 ">{props.title}</h1>
        <h2 className="text-yellow-600 ">{props.price} tk</h2>
      </div>
    </div>
  );
}

export default Product;
