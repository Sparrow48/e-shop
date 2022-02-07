import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShowProduct from "./ShowProduct";
import { debounce } from "./../utils/Debounce";

let searchDebouncer = null;

function Product() {
  const { products: AllProducts, show } = useSelector((state) => state.product);
  const [products, setProducts] = useState(AllProducts);
  console.log("products: ", products);
  const [searchString, setSearchString] = useState("");
  const [active, setActive] = useState("All");
  const [category, setCategory] = useState([
    "All",
    "Kitchen",
    "Bedroom ",
    "Dining Kids",
  ]);
  const filterBycategory = (key = "") => {
    //console.log(para);
    setActive(key);
    let data = [];
    if (key == "All") {
      data = AllProducts;
    } else {
      data = AllProducts.filter((product) => {
        return product.category == key;
      });
    }
    setProducts(data);
  };
  console.log("here called");

  const searchProducts = (title) => {
    console.log("All products: ", AllProducts);
    console.log("Title", title);

    if (!title) {
      setProducts(AllProducts);
      return;
    }
    const filteredProductes = products.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    setProducts(filteredProductes);
    return;
  };

  if (!searchDebouncer) searchDebouncer = debounce(searchProducts, 3000);

  const setCategories = () => {
    const categories = [
      ...category,
      ...AllProducts.map((product) => product.category),
    ];
    const distinctCategory = new Set(categories);
    setCategory(Array.from(distinctCategory));
  };

  useEffect(() => {
    setCategories();
    if (searchString.length > 2) searchDebouncer(searchString);
    setProducts(AllProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, AllProducts]);

  const searchByName = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col max-w-2xl px-10 pt-16 mx-auto space-y-16 md:space-y-0 lg:px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl md:flex-row">
        <div className="w-56 h-full pr-5 top-5 lg:sticky">
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
                    active === item
                      ? "pt-2  border-b-2  border-blue-500"
                      : "pt-2 "
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
        {show ? (
          products && (
            <div className="max-w-2xl divide-y lg:max-w-5xl">
              <div className="flex justify-between lg:w-5xl">
                <div className="px-3 pt-1 bg-gray-100 border rounded">
                  <h1>{products.length} Products Found.</h1>
                </div>

                <div className="relative inline-block w-64">
                  <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
                    <option>Sort Products</option>
                    <option>By Price</option>
                    <option>By A-Z</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid max-w-2xl grid-cols-1 pt-5 mx-auto lg:max-w-5xl lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12">
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
          )
        ) : (
          <h1> Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Product;
