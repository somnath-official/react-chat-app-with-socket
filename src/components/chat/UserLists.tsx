import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { UserListSection } from "./UserListSection"

export const UserLists = () => {
  const pinnedUsers = useSelector((state: RootState) => state.users.pinned)
  const allUsers = useSelector((state: RootState) => state.users.all)

  return (
    <div className="flex flex-col gap-y-1">
      <UserListSection users={pinnedUsers} name="Pinned" headerBgColor="#2d5fab" />
      <UserListSection users={allUsers} name="All" />
    </div>
  )
}
