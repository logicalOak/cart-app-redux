import {createSlice, current} from "@reduxjs/toolkit";
import {createCopy, sumByKey} from "../../utils/helpers";


/* This is the initial state of the products slice. */
const initialState = {
    cartItems: [],
    cartItemsCount: 0,
    cartItemsAmount: 0,
}

/* This is creating a slice of the cart. */
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, {payload}) => {
            const copyCart = createCopy(current(state).cartItems)
            const itemIndex = copyCart.findIndex(i => i.id === payload.id)

            let result = null


            if (itemIndex < 0) {
                result = [...copyCart, {
                    ...payload,
                    quantity: 1,
                    amount: payload.price
                }]
            } else {
                result = copyCart.map((i, index) => index === itemIndex ? {
                    ...i,
                    quantity: i.quantity + 1,
                    amount: i.amount + i.price
                } : i)
            }

            state.cartItems = result
            state.cartItemsCount = sumByKey(result, "quantity")
            state.cartItemsAmount = sumByKey(result, "amount")
        },
        removeItem: (state, {payload}) => {
            const copyCart = createCopy(current(state).cartItems)

            const updateCopy = copyCart.map(el => {
                if (el.id === payload) {
                    return {...el, quantity: el.quantity - 1, amount: el.amount - el.price}
                } else {
                    return el
                }
            })
            const result = updateCopy.filter(el => el.quantity !== 0)

            state.cartItems = result
            state.cartItemsCount = sumByKey(result, "quantity")
            state.cartItemsAmount = sumByKey(result, "amount")

        },
        deleteItem: (state, {payload}) => {
            const copyCart = createCopy(current(state).cartItems)
            state.cartItems = copyCart.filter(el => el.id !== payload)
            state.cartItemsCount = sumByKey(copyCart, "quantity")
            state.cartItemsAmount = sumByKey(copyCart, "amount")
        },
        incrementItem: (state, {payload}) => {
            const copyCart = createCopy(current(state).cartItems)
            state.cartItems = copyCart.map(el => el.id === payload ? {
                ...el,
                quantity: el.quantity + 1,
                amount: el.amount + el.price
            } : el)
            state.cartItemsCount = sumByKey(copyCart, "quantity")
            state.cartItemsAmount = sumByKey(copyCart, "amount")
        },
        decrementItem: (state, {payload}) => {
            const copyCart = createCopy(current(state).cartItems)
            const result = copyCart.map(el => {
                if (el.id === payload) {
                    return {...el, quantity: el.quantity - 1 !== 0 ? el.quantity - 1 : 1, amount: el.amount - el.price !== 0 ?  el.amount - el.price : el.price}
                } else {
                    return el
                }
            })
            state.cartItems = result
            state.cartItemsCount = sumByKey(result, "quantity")
            state.cartItemsAmount = sumByKey(result, "amount")
        },
    }
})

export const {addItem, removeItem, deleteItem, incrementItem, decrementItem} = cartSlice.actions
export default cartSlice.reducer