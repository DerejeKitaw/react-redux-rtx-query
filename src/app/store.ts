import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './../dogs/dogs-api-slice';

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer
    }
})
