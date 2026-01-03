import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const existing = state.cart.find((item) => item.id == action.payload.id);
      if (existing) {
        state.cart = state.cart.filter((item) => item.id != existing.id);
        existing.quantity += 1;
        state.cart.push(existing);
        // Quantity updated silently, UI should handle notification if needed
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        // newItem.quantity = 1;
        state.cart.push(newItem);
        // Added to cart silently
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    // Removed silently
    },
    incrementQuantity(state, action) {
      const existing = state.cart.find((item) => item.id == action.payload);
      // state.cart = state.cart.filter((item) => item.id != existing.id);
      existing.quantity += 1;
      // state.cart.push(existing);
    },
    decrementQuantity(state, action) {
      const existing = state.cart.find((item) => item.id == action.payload);
      if (existing.quantity == 1) {
        state.cart = state.cart.filter((item) => item.id != existing.id);
      } else {
        state.cart = state.cart.filter((item) => item.id != existing.id);
        existing.quantity -= 1;
        state.cart.push(existing);
      }
    },
    checkout(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  checkout,
} = cartSlice.actions;
export default cartSlice.reducer;
