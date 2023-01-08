import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsInCart: [],
	},
	reducers: {
		setItemInCart: (state, action) => {
			state.itemsInCart.push(action.payload)
		},
		removeItemInCart: (state, action) => {
			state.itemsInCart = state.itemsInCart.filter(
				kit => kit.id !== action.payload
			)
		},
	},
})
export const { setItemInCart, removeItemInCart } = cartSlice.actions
export default cartSlice.reducer
