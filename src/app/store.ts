import { configureStore } from "@reduxjs/toolkit";
import { projectApiSlice } from "../projects/projects-api-slice";
import { projectsApiSlice } from "../projects/api";
import { inverterApiSlice } from "../projects/inverter-api-slice";
import { apiSlice } from './../dogs/dogs-api-slice';

export const store = configureStore({
    reducer:{
        // [apiSlice.reducerPath]: apiSlice.reducer,
        // [inverterApiSlice.reducerPath]: inverterApiSlice.reducer,
        [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
        // [projectApiSlice.reducerPath]: projectApiSlice.reducer,
    }
})


export type AppDispatch = typeof store.dispatch