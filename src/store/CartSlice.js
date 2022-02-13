import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart") || []),
    totalQuantity: JSON.parse(localStorage.getItem("total") || 0),
    totalPrice: JSON.parse(localStorage.getItem("totalPrice") || 0),
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      state.totalPrice = state.totalPrice + newItem.quantity * newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.title,
          image: newItem.image,
          Available: newItem.Available,
          quantity: newItem.quantity,
          subTotal: newItem.quantity * newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.subTotal =
          existingItem.subTotal + newItem.quantity * newItem.price;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("total", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity - newItem.quantity;
      state.totalPrice = state.totalPrice - newItem.quantity * newItem.price;

      if (existingItem.quantity > 1 && newItem.singleUnit) {
        existingItem.quantity = existingItem.quantity - newItem.quantity;
        existingItem.subTotal = existingItem.subTotal - newItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("total", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    removeAllItems(state, action) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("total", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
