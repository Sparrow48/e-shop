import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../components/product/FilterProducts";
import ProductItem from "../components/product/ProductItem";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import { fetchProduct } from "../store/reducer/productSlice";
import Skeleton from "../components/helper/Skeleton";

const Product = () => {

  const dispatch = useDispatch()
  const { updateProducts, products, show = true, fetchProductStatus } = useSelector(state => state.product);

  useEffect(() => {
    if (Object.keys(products)?.length <= 0) {
      dispatch(fetchProduct())
    }
  }, [])


  if (fetchProductStatus === 'loading') {
    return (
      <Skeleton />
    )
  }

  return (
    <div>
      <div className="flex flex-col max-w-2xl px-10 py-16 mx-auto space-y-16 md:space-y-0 lg:px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl md:flex-row">
        <div className="w-56 h-full pr-5 top-5 lg:sticky">
          <FilterProducts />
        </div>
        {show ? (
          Object.keys(updateProducts)?.length > 0 && (
            <div className="max-w-2xl divide-y lg:max-w-5xl">
              <div className="flex flex-col md:flex-row gap-3 justify-between lg:w-5xl pb-2">
                <div className="px-3 w-fit pt-1 bg-gray-100 border rounded">
                  <h1>{Object.keys(updateProducts)?.length} Products Found.</h1>
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
                {Object.values(updateProducts)?.map((product) => (
                  <ProductItem
                    key={product._id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    _id={product._id}
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
