import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import AuthSlice from "./AuthSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    product: ProductSlice.reducer,
    auth: AuthSlice.reducer,
  },
});
export default Store;
