import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cart";

export const store = configureStore({
  reducer: {
    cartData: cartReducer,
  },
});