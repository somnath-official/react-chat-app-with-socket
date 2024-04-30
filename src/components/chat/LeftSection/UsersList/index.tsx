import { IUser } from "@/interfaces/UserInterface"
import { setSelectedUserToChat } from "@/store/features/chatSlice"
import { RootState } from "@/store/index"
import { useDispatch, useSelector } from "react-redux"
import { UserProfile } from "./UserProfile"

export const UsersList = () => {
  const dispatch = useDispatch()
  const allUsers = useSelector((state: RootState) => state.users.all)
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)

  return (
    <div className="mb-2">
      <div className="border p-1 rounded-t-lg">
        <span>Chats</span>
      </div>
      <div>
        {
          allUsers?.length
            ? <div className="border-l border-r border-b rounded-b-lg">
                {
                  allUsers.map((user) => {
                    return (
                      <div
                        key={user.id}
                        className={`p-3 cursor-pointer ${selectedUserToChat && selectedUserToChat.id === user.id ? 'bg-gray-200' : ''}`}
                        onClick={() => {dispatch(setSelectedUserToChat({user}))}}
                      >
                        <UserProfile user={user}/>
                      </div>
                    )
                  })
                }
              </div>
            : <div className="text-sm text-zinc-500 h-12 flex items-center justify-center border-l border-r border-b rounded-b-lg">
                <p>No contacts</p>
              </div>
        }
      </div>
    </div>
  )
}
