import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { ProfileImage } from "../ProfileImage"
import { setSelectedUserToChat } from "../../store/features/chatSlice"
import { IUser } from "../../interfaces/UserInterface"

export const UserLists = () => {
  const dispatch = useDispatch()
  const allUsers = useSelector((state: RootState) => state.users)
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)

  return (
    <div>
      {
        allUsers.map((user) => {
          return (
            <div
              key={user.id}
              className={`p-3 cursor-pointer ${selectedUserToChat && selectedUserToChat.id === user.id ? 'bg-gray-200' : ''}`}
              onClick={() => {dispatch(setSelectedUserToChat({user}))}}
            >
              <ProfileImage user={user}/>
            </div>
          )
        })
      }
    </div>
  )
}
