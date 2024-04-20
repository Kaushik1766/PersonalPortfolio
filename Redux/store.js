import { configureStore } from '@reduxjs/toolkit'
import tabSlice from './features/tabs'

export const makeStore = () => {
    return configureStore({
        reducer: {
            tabs: tabSlice
        }
    })
}