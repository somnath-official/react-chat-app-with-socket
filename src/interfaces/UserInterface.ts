import { Role } from "./RoleInterface";

export interface IUser {
  id: number
  name: string
  role: Role
  email: string
  profileImage: string
  isOnline: boolean
  isPinned: boolean
  lastSeen: number | null
}