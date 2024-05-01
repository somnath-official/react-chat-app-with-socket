import { IUser } from "@/interfaces/UserInterface"
import { createSlice } from "@reduxjs/toolkit"

interface IAuthSlice {
  user: IUser | null
}

const initialState: IAuthSlice = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

// export const {} = authSlice.actions
export default authSlice.reducer