import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "../services/ProductsService";
import {cartReducer} from "./cartStore";

const preloadedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

