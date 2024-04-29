import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import chatSlice from './features/chatSlice'

export const store = configureStore({
  reducer: {
    users: userSlice,
    chat: chatSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch