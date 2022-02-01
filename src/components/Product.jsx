import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShowProduct from "./ShowProduct";

function Product() {
  const AllProducts = useSelector((state) => state.product.products);
  //console.log(AllProducts);
  const [products, setProducts] = useState(AllProducts);
  //console.log(products);

  const category = [
    "All",
    "Living Room",
    "Office Setup",
    "Kitchen",
    "Bedroom ",
    "Dining Kids",
  ];

  useEffect(() => {
    setProducts(AllProducts);
  }, [AllProducts]);

  const sortBycategory = (para) => {
    //console.log(para);
    let data = [];
    if (para == "All") {
      data = AllProducts;
    } else {
      data = AllProducts.filter((product) => {
        return product.category == para;
      });
      //console.log(data);
    }

    setProducts(data);
  };

  return (
    <div>
      {products && (
        <div className="flex max-w-6xl mx-auto ">
          <div className="sticky top-0 h-full max-w-2xl pt-10 pr-5 w-72">
            <div className="">
              <div>
                <h1 className="pl-5 font-bold bg-gray-200 rounded">Category</h1>
              </div>

              <ul className="flex flex-col items-start pt-5 pl-5">
                {category.map((item) => (
                  <button
                    className="pt-2 focus:outline-none focus:border-b-2 focus:border-black"
                    key={item}
                    onClick={() => sortBycategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid max-w-4xl grid-cols-3 pt-10 gap-x-16 gap-y-12">
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
