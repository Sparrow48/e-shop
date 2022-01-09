import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
    totalQuantity: JSON.parse(localStorage.getItem("total") || "0"),
  },
  reducers: {
    addToCard(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = newItem.value;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("total", JSON.stringify(state.totalQuantity));
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
