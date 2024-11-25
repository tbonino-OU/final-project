import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

export const store = configureStore({
    // Global store of all our reducers for handling user logs
    reducer: {
        auth: authSlice
    }
})