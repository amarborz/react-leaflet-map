import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [
		{
			key: 1,
			from: 'Москва',
			name: 'Доставка одежды',
			to: 'Питер',
			fromAddress: [55.7504461, 37.6174943],
			toAddress: [59.938732, 30.316229],
			fromAddressInfo: 'Место ',
		},
		{
			key: 2,
			name: ' Доставка компьютеров',
			from: 'Армавир',
			to: 'Астрахань',
			fromAddress: [44.99, 41.12],
			toAddress: [46.35, 48.04],
		},
		{
			key: 3,
			name: ' Доставка еды',
			from: 'Великий новгород',
			to: 'Волгоград',
			fromAddress: [58.52, 31.27],
			toAddress: [48.72, 44.5],
		},
	],
	currentItem: {
		key: 1,
		from: 'Москва',
		name: 'Доставка одежды',
		to: 'Питер',
		fromAddress: [55.7504461, 37.6174943],
		toAddress: [59.938732, 30.316229],
		fromAddressInfo: 'Место ',
	},
}

const routesSlice = createSlice({
	name: 'routes',
	initialState,
	reducers: {
		setCurrentItem(state, action) {
			state.currentItem = action.payload
		},

		clear(state) {
			state.currentItem = null
		},

		updateRoute(state, action) {
			state.currentItem = {
				...state.currentItem,
				[action.payload.type]: [action.payload.lon, action.payload.lng],
			}
		},
	},
})

export const { setCurrentItem, updateRoute } = routesSlice.actions

export default routesSlice.reducer
