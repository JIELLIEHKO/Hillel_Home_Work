import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
	pizzas: [],
	isLoading: false,
	error: null,
	totalItems: 0,
	totalPrice: 0,
	totalPriority: 0,
	customer: '',
	address: '',
	phone: '',
	priority: false,
	priorityPrice: 8,
	position: '',
	orderId: ''
}

export const getAllPizzas = createAsyncThunk('cart/getAllPizzas', async () => {
	const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu')
	const { data } = await res.json()
	return data
})

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

			state.totalItems = calcTotalItems(state.cartItems)
			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		deleteFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				item => item.id !== action.payload
			)

			state.totalItems = calcTotalItems(state.cartItems)
			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		increment: (state, action) => {
			const findItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload
			)
			findItem.qty += 1

			state.totalItems = calcTotalItems(state.cartItems)
			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		decrement: (state, action) => {
			const findItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload
			)
			findItem.qty -= 1

			if (findItem.qty < 1) {
				state.cartItems = state.cartItems.filter(
					item => item.id !== action.payload
				)
			}

			state.totalItems = calcTotalItems(state.cartItems)
			state.totalPrice = calcTotalPrice(state.cartItems)
		},
		addOrderInfo: (state, action) => {
			state.customer = action.payload.customer
			state.address = action.payload.address
			state.phone = action.payload.phone
			state.priority = action.payload.priority
		},
		addOrderId: (state, action) => {
			state.orderId = action.payload.orderId
		}
	},

	extraReducers: builder => {
		builder.addCase(getAllPizzas.pending, state => {
			state.error = null
			state.isLoading = true
		})
		builder.addCase(getAllPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
			state.isLoading = false
		})
		builder.addCase(getAllPizzas.rejected, state => {
			state.error = 'Failed to fetch'
			state.isLoading = false
		})
	}
})

export default cartSlice.reducer
export const {
	addToCart,
	deleteFromCart,
	decrement,
	increment,
	addOrderInfo,
	addOrderId
} = cartSlice.actions

const calcTotalItems = items => items.reduce((acc, item) => acc + item.qty, 0)
const calcTotalPrice = items =>
	items.reduce((acc, item) => acc + item.qty * item.unitPrice, 0)

export { calcTotalItems, calcTotalPrice }
