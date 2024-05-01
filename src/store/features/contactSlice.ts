import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/UserInterface'

interface IContactSlice {
  all: IUser[]
}

const initialState: IContactSlice = {
  all: [
    {
      id: 1,
      name: 'Rabin Sardar',
      email: 'rabin@example.com',
      role: 'User',
      isOnline: true,
      profileImage: 'https://i.pravatar.cc/150?u=rabin@example.com',
      isPinned: true,
      lastSeen: null,
    },
    {
      id: 3,
      name: 'Chhabi Sardar',
      email: 'chhabi@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=chhabi@example.com',
      isPinned: false,
      lastSeen: 1601549410000
    },
    {
      id: 4,
      name: 'Gobinda Sardar',
      email: 'gobinda@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=gobinda@example.com',
      isPinned: false,
      lastSeen: 1714474210000
    },
    {
      id: 5,
      name: 'Rina Sardar',
      email: 'rina@example.com',
      role: 'User',
      isOnline: true,
      profileImage: 'https://i.pravatar.cc/150?u=rina@example.com',
      isPinned: false,
      lastSeen: null
    },
    {
      id: 6,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com',
      isPinned: false,
      lastSeen: 1703991335000
    },
    {
      id: 7,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com',
      isPinned: false,
      lastSeen: 1714440558000
    },
    {
      id: 8,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com',
      isPinned: false,
      lastSeen: 1601555560000
    },
    {
      id: 9,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com',
      isPinned: false,
      lastSeen: 1710778452000
    },
    {
      id: 10,
      name: 'Disha Sardar',
      email: 'disha@example.com',
      role: 'User',
      isOnline: false,
      profileImage: 'https://i.pravatar.cc/150?u=disha@example.com',
      isPinned: false,
      lastSeen: 1714314311000
    }
  ]
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
})

// export const {} = contactSlice.actions
export default contactSlice.reducer