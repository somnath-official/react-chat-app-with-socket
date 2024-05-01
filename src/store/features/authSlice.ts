import { IUser } from "@/interfaces/UserInterface"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IAuthSlice {
  user: IUser | null
}

const initialState: IAuthSlice = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{user: IUser}>) => {
      state.user = action.payload.user
    },
    clearUser: (state) => {
      state.user = null
    },
  },
})

export const {setUser, clearUser} = authSlice.actions
export default authSlice.reducer