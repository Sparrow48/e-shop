import React from "react";

function Product(props) {
  return (
    <div className="flex flex-col space-y-5 max-h-52 sm:h-60 lg:space-y-3 lg:w-60 lg:h-72">
      <a href="/productDetails">
        <img
          className="object-cover h-40 rounded sm:h-56 w-72 sm:w-135 lg:h-64 lg:w-60 "
          src={props.image}
          alt="Fetured_products"
        />
      </a>
      <div className="flex justify-between">
        <h1 className="text-gray-600 ">{props.title}</h1>
        <h2 className="text-yellow-600 ">{props.price} tk</h2>
      </div>
    </div>
  );
}

export default Product;
