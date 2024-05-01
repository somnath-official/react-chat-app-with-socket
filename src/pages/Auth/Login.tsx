import { IUser } from "@/interfaces/UserInterface"
import { setUser } from "@/store/features/authSlice"
import { LOCAL_STORAGE_AUTH_USER } from "../../constants"
import { useDispatch } from "react-redux"

export const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    const user: IUser = {
      id: 2,
      name: 'Somnath Sardar',
      email: 'somnath@example.com',
      role: 'Admin',
      isOnline: true,
      profileImage: 'https://i.pravatar.cc/150?u=somnath@example.com',
      isPinned: true,
      lastSeen: null,
    }

    dispatch(setUser({user}))
    localStorage.setItem(LOCAL_STORAGE_AUTH_USER, JSON.stringify(user))
  }
  return (
    <button onClick={handleLogin} className="border shadow bg-green-300 text-gray-900 px-4 py-2 rounded">Login</button>
  )
}
