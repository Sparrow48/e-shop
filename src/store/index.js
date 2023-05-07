import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./reducer/AuthSlice";
import productSlice from "./reducer/productSlice";
import userSlice from './reducer/userSlice'
import orderSlice from "./reducer/orderSlice";
import FileSystemSlice from "./reducer/FileSystemSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    product: productSlice,
    user: userSlice,
    order: orderSlice,
    file: FileSystemSlice
  },
});
export default Store;
