import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./reducer/AuthSlice";
import productSlice from "./reducer/productSlice";
import userSlice from './reducer/userSlice'

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    product: productSlice,
    user: userSlice
  },
});
export default Store;
