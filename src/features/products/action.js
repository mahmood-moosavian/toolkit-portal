import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsSingleton } from "../../lib/products";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const products = ProductsSingleton.getInstance();
  const response = await products.get();
  return response;
})

export const showProducts = createAsyncThunk("products/showProducts", async () => {

  let data = [];
  return data;
})