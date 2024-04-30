import { useSelector } from "react-redux"
import { RootState } from "@/store/index"
import { MessageListing } from "./MessageListing"
import { SendMessage } from "./SendMessage"
import { IUser } from "@/interfaces/UserInterface"

export const MessageArea = () => {
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)
  
  if (!selectedUserToChat) return <></>
  
  return (
    <div className="relative h-full">
      <MessageListing />
      <SendMessage />
    </div>
  )
}
