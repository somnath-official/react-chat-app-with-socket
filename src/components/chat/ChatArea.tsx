import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Messages } from "./Messages"
import { SendMessageBox } from "./SendMessageBox"
import { IUser } from "../../interfaces/UserInterface"

export const ChatArea = () => {
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)
  
  if (!selectedUserToChat) return <></>
  
  return (
    <div className="relative h-full">
      <Messages />
      <SendMessageBox />
    </div>
  )
}
