import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
	totalItems: 0,
	totalPrice: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const findItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload.id
			)

			if (!findItem) {
				state.cartItems.push({ ...action.payload, qty: 1 })
			} else {
				findItem.qty += 1
			}
		}
	}
})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions
