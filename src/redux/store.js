import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import wishSlice from "./slice/wishSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    productSlice,
    wishSlice,
    cartSlice,
  },
});

export default store;
