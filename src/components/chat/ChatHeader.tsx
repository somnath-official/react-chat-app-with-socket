import { useSelector } from "react-redux"
import { IUser } from "../../interfaces/UserInterface"
import { ProfileImage } from "../ProfileImage"
import { RootState } from "../../store"

export const ChatHeader = () => {
  const user: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)

  return (
    <div className="flex flex-row h-14 gap-x-0">
      <div className="w-3/12 p-3 bg-white text-gray-500 rounded-tl rounded-bl flex items-center border-r">
        <h3 className="font-bold">Chat App</h3>
      </div>
      <div className="w-9/12 p-3 flex items-center bg-white rounded-tr rounded-br">
        <ProfileImage user={user} />
      </div>
    </div>
  )
}
