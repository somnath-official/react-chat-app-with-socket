import { IUser } from "@/interfaces/UserInterface"
import TrippleDotSvg from '@/assets/icons/TrippleDots.svg'

export const ChannelProfileImage = ({user}: {user: IUser | null}) => {
  const handleMenuClicked = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    console.log('Menu clicked')
  }
  if (user) {
    return (
      <div className="flex justify-between items-center">
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
                : <span className="text-xs text-gray-700">Offline</span>
            }
          </div>
        </div>
        <img src={TrippleDotSvg} className="h-5 cursor-pointer" onClick={handleMenuClicked}/>
      </div>
    )
  }

  return <></>
}
