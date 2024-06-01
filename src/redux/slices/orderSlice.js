import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAllPizzas = createAsyncThunk('cart/getAllPizzas', async () => {
	const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu')
	const { data } = await res.json()
	return data
})

const cartSlice = createSlice({
	name: 'OrderInfo',
	address: data.address,
	customer: data.name,
	phone: data.phone,
	priority: data.priority || false,
	position: ''
})

export default cartSlice.reducer
export const { addToCart, deleteFromCart, decrement, increment } =
	cartSlice.actions

const calcTotalItems = items => items.reduce((acc, item) => acc + item.qty, 0)
const calcTotalPrice = items =>
	items.reduce((acc, item) => acc + item.qty * item.unitPrice, 0)

export { calcTotalItems, calcTotalPrice }
