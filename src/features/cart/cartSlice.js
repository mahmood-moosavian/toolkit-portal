import { createSlice } from "@reduxjs/toolkit";
import * as action from "./action";

const initialState = {
  items:[],
  loading:false,
  error:false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  extraReducers: (builder) => {
    builder
    .addCase(action.addToCart.pending, (state) => {
      state.loading = true;
    })
    .addCase(action.addToCart.rejected, (state) => {
      state.loading = false;
      state.error = true
    })
    .addCase(action.addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload)
    })
  },
  reducers:{
    changeMode: (state, action) => {
      state.loading = true;
      state.loading = false;
    }
  }
})

export const { changeMode } = cartSlice.actions;
export default cartSlice.reducer; 
