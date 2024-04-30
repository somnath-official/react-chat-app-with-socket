import { useSelector } from "react-redux"
import { IUser } from "@/interfaces/UserInterface"
import { HeaderProfileImage } from "./HeaderProfileImage"
import { RootState } from "@/store/index"
import { SearchUser } from "./SearchUser"

export const ChatHeader = () => {
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)

  return (
    <div className="flex flex-row h-14 gap-x-0">
      <div className="w-3/12 p-3 bg-white text-gray-500 rounded-tl flex items-center border-r">
        <SearchUser />
      </div>
      <div className="w-9/12 p-3 flex items-center justify-between bg-white rounded-tr">
        {
          selectedUserToChat &&
          <>
            <HeaderProfileImage user={selectedUserToChat} key={selectedUserToChat.id} />
            <div className="pr-5 flex items-center gap-x-5">
              <i className="fa fa-phone cursor-pointer"></i>
              <i className="fa fa-video cursor-pointer"></i>
              <i className="fa fa-ellipsis-v cursor-pointer" style={{fontWeight: 400}}></i>
            </div>
          </>
        }
      </div>
    </div>
  )
}
