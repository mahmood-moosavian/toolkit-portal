import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk("cart/addTocart", async () => {
  const res = await fetch(`https://asas.ge/get`);
  const response = await res.json();
  return response;
});
