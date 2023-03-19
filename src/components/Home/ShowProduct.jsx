import React from "react";
import { NavLink } from "react-router-dom";

function ShowProduct(props) {
  return (
    <div className="flex flex-col space-y-3 max-h-52 sm:h-60 lg:w-72 lg:h-72">
      <NavLink to={`/productDetails/${props._id}`}>
        <img
          className="object-cover h-40 rounded sm:h-48 w-135 sm:w-135 lg:h-48 lg:w-72 "
          src={props.image}
          alt="Fetured_products"
        />
      </NavLink>
      <div className="flex justify-between">
        <h1 className="text-gray-600 ">{props.title}</h1>
        <h2 className="text-yellow-600 ">{props.price} tk</h2>
      </div>
    </div>
  );
}

export default ShowProduct;
