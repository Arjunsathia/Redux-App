import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishList: [],
  },
  reducers: {
    addToWishList: (state, action) => {
      const existing = state.wishList.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        alert("Already in Wishlist");
      } else {
        state.wishList.push(action.payload);
        alert("Added to Wishlist");
      }
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
      // alert("Removed from Wishlist");
    },
  },
});

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
