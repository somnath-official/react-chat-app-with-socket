import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './features/contactSlice'
import chatSlice from './features/chatSlice'
import authSlice from './features/authSlice'

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    chat: chatSlice,
    auth: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch