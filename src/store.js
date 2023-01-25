import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import themeReducer from "./features/theme/themeSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    Products: productsReducer,
    Theme: themeReducer,
    Cart: cartReducer,
  },
});
