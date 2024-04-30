import { IUser } from "../interfaces/UserInterface"
import moment from "moment"

export const ProfileImage = ({user}: {user: IUser | null}) => {
  if (user) {
    return (
      <div className="flex items-center">
        <span className="relative inline-block">
          <img
            className="rounded-full h-10 w-10 inline-block"
            src={user.profileImage}
            alt={user.name}
          />
          {
            user.isOnline
              ? <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white" />
              : <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-300 ring-2 ring-white" />
          }
        </span>
        <div className="ml-3 flex flex-col">
          <p className="text-gray-900 text-sm font-semibold">{user.name}</p>
          {
            user.isOnline
              ? <span className="text-xs text-gray-700">Online</span>
              : <span className="text-xs text-gray-700 relative">
                  <span>Offline</span>
                  <span>Last seen: {`${user.lastSeen ? moment(user.lastSeen).calendar() : ''}`} </span>
                </span>
          }
        </div>
      </div>
    )
  }

  return <></>
}
