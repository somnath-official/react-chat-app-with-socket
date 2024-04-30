import { useState } from "react"
import { IUser } from "@/interfaces/UserInterface"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/index"
import { setSelectedUserToChat } from "@/store/features/chatSlice"
import { ChannelProfileImage } from "./ChannelProfileImage"

interface IUserListsSection {
  users: IUser[]
  name: string
  headerBgColor?: string
  headerTextColor?: string
}

export const SingleChannel = ({users, name, headerBgColor, headerTextColor}: IUserListsSection) => {
  const dispatch = useDispatch()
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)
  const [showSection, setShowSection] = useState(true)

  return (
    <div>
      <div
        onClick={() => setShowSection(prev => !prev)}
        className={`cursor-pointer rounded-t ${!showSection ? 'rounded-b' : ''} py-2`}
        style={{ backgroundColor: headerBgColor ?? '#6b7280', color: headerTextColor ?? '#ffffff', transition: 'background-color 0.2s ease-in'}}
      >
        <label className="text-sm font-semibold pl-2 cursor-pointer"># {name}</label>
      </div>
      <div >
      {
        showSection &&
        <>
          {
            users?.length
              ? <div className="border-l border-r border-b rounded-b-lg">
                  {
                    users.map((user) => {
                      return (
                        <div
                          key={user.id}
                          className={`p-3 cursor-pointer ${selectedUserToChat && selectedUserToChat.id === user.id ? 'bg-gray-200' : ''}`}
                          onClick={() => {dispatch(setSelectedUserToChat({user}))}}
                        >
                          <ChannelProfileImage user={user}/>
                        </div>
                      )
                    })
                  }
                </div>
              : <div className="text-sm text-zinc-500 h-12 flex items-center justify-center border-l border-r border-b rounded-b-lg">
                  <p>No {name} contacts</p>
                </div>
          }
        </>
      }
      </div>
    </div>
  )
}
