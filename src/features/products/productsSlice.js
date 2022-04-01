import {createSlice} from "@reduxjs/toolkit";

/* This is the initial state of the products slice. */
const initialState = {
    items: []
}

/* Creating a slice of the products reducer. */
export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, {payload}) => {
            state.items = payload
        }
    }
})

/* This is a way to export multiple things from a slice. */
export const {setProducts} = productsSlice.actions

export default productsSlice.reducer