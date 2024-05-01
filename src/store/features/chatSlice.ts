import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/UserInterface'

type IMessage  = string
type MessageType = 'systemGenerated' | 'userMessage'

interface IMessageMeta {
  id: string
  type: MessageType
  sender: IUser
  receiver: IUser
  message: IMessage
  timestamp: number
  isSeen: boolean
  isReceived: boolean
}

interface IChatSlice {
  selectedUserToChat: IUser | null
  selectedGroupToChat: null,
  messages: IMessageMeta []
}

const initialState: IChatSlice = {
  selectedUserToChat: null,
  selectedGroupToChat: null,
  messages: []
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