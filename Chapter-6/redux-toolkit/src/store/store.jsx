import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import prodReducer from './productSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: prodReducer,
    },
})

export default store;