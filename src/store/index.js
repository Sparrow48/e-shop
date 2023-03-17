import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./reducer/AuthSlice";
import productSlice from "./reducer/productSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    product: productSlice
  },
});
export default Store;
