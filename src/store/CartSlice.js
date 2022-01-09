import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCard(state, action) {
      state.totalQuantity = action.payload.value;
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
