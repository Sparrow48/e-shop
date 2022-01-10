import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    fetchProduct(state, action) {
      state.products.push(...action.payload);
      // state.products = action.payload;
    },
  },
});

export const productActions = ProductSlice.actions;
export default ProductSlice;
