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
    show: false,
  },
  reducers: {
    // fetchProduct(state, action) {
    //   state.products.push(...action.payload);
    //   state.show = true;
    //   // state.products = action.payload;
    // },
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      state.products.push(...action.payload);
      state.show = true;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.show = false;
    },
  },
});

export const productActions = ProductSlice.actions;
export default ProductSlice;
