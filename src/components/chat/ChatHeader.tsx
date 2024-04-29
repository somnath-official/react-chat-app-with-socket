import { useSelector } from "react-redux"
import { IUser } from "../../interfaces/UserInterface"
import { ProfileImage } from "../ProfileImage"
import { RootState } from "../../store"
import PhoneIcon from '../../assets/icons/Phone.svg'
import VideoCameraIcon from '../../assets/icons/VideoCamera.svg'
import TrippleDotsSvg from '../../assets/icons/TrippleDots.svg'
import { SearchUser } from "./SearchUser"

export const ChatHeader = () => {
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)

  return (
    <div className="flex flex-row h-14 gap-x-0">
      <div className="w-3/12 p-3 bg-white text-gray-500 rounded-tl flex items-center border-r">
        <SearchUser />
      </div>
      <div className="w-9/12 p-3 flex items-center justify-between bg-white rounded-tr">
        <ProfileImage user={selectedUserToChat} />
        {
          selectedUserToChat &&
          <div className="pr-5 flex items-center gap-x-5">
            <img src={PhoneIcon} alt="Call icon" className="h-5 w-5 flex-shrink-0 cursor-pointer" />
            <img src={VideoCameraIcon} alt="Video Camera icon" className="h-5 w-5 flex-shrink-0 cursor-pointer" />
            <img src={TrippleDotsSvg} alt="Video Camera icon" className="h-5 w-5 flex-shrink-0 cursor-pointer" />
          </div>
        }
      </div>
    </div>
  )
}
