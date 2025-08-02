import {configureStore}  from '@reduxjs/toolkit';
import { carsSlice } from '../features/Cars/carsSlice.js';

export const store=configureStore({
    reducer:{
        [carsSlice.reducerPath]:carsSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsSlice.middleware),
})  