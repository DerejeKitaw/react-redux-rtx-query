import { configureStore } from "@reduxjs/toolkit";
import { projectApiSlice } from "../projects/projects-api-slice";
import { apiSlice } from './../dogs/dogs-api-slice';

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        [projectApiSlice.reducerPath]: projectApiSlice.reducer,
    }
})


export type AppDispatch = typeof store.dispatch