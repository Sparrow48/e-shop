import React, { useState, useEffect } from "react";
import { debounce } from "./../../utils/Debounce";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "./../../store/ProductSlice";

function FilterProducts() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [active, setActive] = useState("All");
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState([
    "All",
    "Kitchen",
    "Bedroom ",
    "Dining Kids",
  ]);

  useEffect(() => {
    const categories = [
      ...category,
      ...products.map((product) => product.category),
    ];
    const distinctCategory = new Set(categories);
    setCategory(Array.from(distinctCategory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    dispatch(productActions.filterProducts({ searchString, active }));
  }, [searchString, active, dispatch]);

  const filterBycategory = (key = "") => {
    setActive(key);
  };

  const search = (event) => {
    setSearchString(event.target.value);
  };

  const searchByName = debounce(search, 500);

  return (
    <div>
      <div>
        <div className="w-full mb-6 md:mb-0">
          <input
            className="block w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Search"
            onChange={searchByName}
          />
        </div>
      </div>
      <div className="pt-5 ">
        <div className="w-full px-3 py-2 font-bold bg-gray-200 rounded">
          <h1>Category</h1>
        </div>

        <ul className="flex flex-col items-start pt-3 pl-3">
          {category.sort().map((item) => (
            <button
              className={
                active === item ? "pt-2  border-b-2  border-blue-500" : "pt-2 "
              }
              key={item}
              onClick={() => filterBycategory(item)}
            >
              {item}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterProducts;
