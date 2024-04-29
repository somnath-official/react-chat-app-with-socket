import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/UserInterface'

interface IChatSlice {
  selectedUserToChat: IUser | null
}

const initialState: IChatSlice = {
  selectedUserToChat: null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectedUserToChat: (state, action: PayloadAction<{user: IUser | null}>) => {
      state.selectedUserToChat = action.payload.user
    },
  },
})

export const { setSelectedUserToChat } = chatSlice.actions
export default chatSlice.reducer