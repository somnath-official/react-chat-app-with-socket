import { useState } from "react"
import { IUser } from "../../interfaces/UserInterface"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { setSelectedUserToChat } from "../../store/features/chatSlice"
import { ProfileImage } from "../ProfileImage"

interface IUserListsSection {
  users: IUser[]
  name: string
  headerBgColor?: string
  headerTextColor?: string
}

export const UserListSection = ({users, name, headerBgColor, headerTextColor}: IUserListsSection) => {
  const dispatch = useDispatch()
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)
  const [showSection, setShowSection] = useState(true)
  return (
    <div>
      <div
        onClick={() => setShowSection(prev => !prev)}
        className="cursor-pointer"
        style={{backgroundColor: headerBgColor ?? '#6b7280'}}
      >
        <label
          className="text-sm font-semibold pl-2 cursor-pointer"
          style={{color: headerTextColor ?? '#ffffff'}}
        >
          #{name}
        </label>
      </div>
      {
        users?.length
          ? <>
              {
                showSection &&
                <div>
                  {
                    users.map((user) => {
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
              }
            </>
          : <div className="text-sm text-zinc-500 flex items-center justify-center">
              <p>No pinned contacts</p>
            </div>
      }
    </div>
  )
}
