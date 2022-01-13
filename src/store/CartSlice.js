import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
    totalQuantity: JSON.parse(localStorage.getItem("total") || "0"),
    totalPrice: JSON.parse(localStorage.getItem("totalPrice") || "0"),
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + newItem.value;
      state.totalPrice = state.totalPrice + newItem.value * newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.title,
          image: newItem.image,
          Available: newItem.Available,
          quantity: newItem.quantity,
          subTotal: newItem.value * newItem.price,
        });
      } else {
        existingItem.subTotal =
          existingItem.subTotal + newItem.value * newItem.price;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("total", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
