import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/UserInterface'

interface IUserSlice {
  pinned: IUser[]
  all: IUser[]
}

const initialState: IUserSlice = {
  pinned: [
    {
      id: 1,
      name: 'Rabin Sardar',
      email: 'rabin@example.com',
      role: 'User',
      isOnline: true,
      profileImage: 'https://i.pravatar.cc/150?u=rabin@example.com'
    },
    {
      id: 2,
      name: 'Somnath Sardar',
      email: 'somnath@example.com',
      role: 'Admin',
      isOnline: true,
      profileImage: 'https://i.pravatar.cc/150?u=somnath@example.com'
    },
    {
      id: 3,
      name: 'Chhabi Sardar',
      email: 'chhabi@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=chhabi@example.com'
    },
  ],
  all: [
    {
      id: 4,
      name: 'Gobinda Sardar',
      email: 'gobinda@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=gobinda@example.com'
    },
    {
      id: 5,
      name: 'Rina Sardar',
      email: 'rina@example.com',
      role: 'User',
      isOnline: true,
      profileImage: 'https://i.pravatar.cc/150?u=rina@example.com'
    },
    {
      id: 6,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com'
    },
    {
      id: 7,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com'
    },
    {
      id: 8,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com'
    },
    {
      id: 9,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com'
    },
    {
      id: 10,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com'
    }
  ]
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
})

// export const {} = userSlice.actions
export default userSlice.reducer