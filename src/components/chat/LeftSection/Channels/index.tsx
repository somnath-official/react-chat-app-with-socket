import { useSelector } from "react-redux"
import { RootState } from "@/store/index"
import { SingleChannel } from "./SingleChannel"

export const Channels = () => {
  const allUsers = useSelector((state: RootState) => state.contacts.all)
  const pinnedUsers = allUsers.filter(user => user.isPinned)
  const remainingUsers = allUsers.filter(user => !user.isPinned)

  return (
    <div className="flex flex-col gap-y-1">
      <SingleChannel users={remainingUsers} name="All" />
      <SingleChannel users={pinnedUsers} name="Pinned" headerBgColor="#2d5fab" />
    </div>
  )
}
