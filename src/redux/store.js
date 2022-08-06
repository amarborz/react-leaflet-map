import { configureStore } from '@reduxjs/toolkit'
import routesReducer from './routesSlice'

export const store = configureStore({
	reducer: {
		routes: routesReducer,
	},
})
