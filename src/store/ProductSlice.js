import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/products",
  async (ApiUrl) => {
    const { data } = await axios.get(`${ApiUrl}/products.json`);
    return Object.values(data);
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    updatedProducts: [],
    show: false,
  },
  reducers: {
    filterProducts(state, action) {
      const { searchString, active: category } = action.payload;
      let newProducts;
      let filteredProducts;

      if (category === "All" && !searchString) {
        state.updatedProducts = state.products;
      } else {
        if (category === "All") {
          newProducts = state.products;
        } else {
          newProducts = state.products.filter((product) => {
            return product.category === category;
          });
        }

        if (!searchString) {
          filteredProducts = newProducts;
        } else {
          filteredProducts = newProducts.filter((product) => {
            return product.title
              .toLowerCase()
              .includes(searchString.toLowerCase());
          });
        }
        state.updatedProducts = [];
        state.updatedProducts.push(...filteredProducts);
      }
    },
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      state.products.push(...action.payload);
      state.updatedProducts.push(...action.payload);
      state.show = true;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.show = false;
    },
  },
});

export const productActions = ProductSlice.actions;
export default ProductSlice;
