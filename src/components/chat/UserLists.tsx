import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { UserListSection } from "./UserListSection"

export const UserLists = () => {
  const allUsers = useSelector((state: RootState) => state.users.all)
  const pinnedUsers = allUsers.filter(user => user.isPinned)
  const remainingUsers = allUsers.filter(user => !user.isPinned)

  return (
    <div className="flex flex-col gap-y-1 p-1">
      <UserListSection users={pinnedUsers} name="Pinned" headerBgColor="#2d5fab" />
      <UserListSection users={remainingUsers} name="All" />
    </div>
  )
}
