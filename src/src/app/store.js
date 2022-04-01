import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "../features/products/productsSlice"
import cartReducer from "../features/cart/cartSlice"

/* Creating a store with the reducer we just created. */
export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
})