import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { ProfileImage } from "../ProfileImage"
import { setSelectedUserToChat } from "../../store/features/chatSlice"
import { IUser } from "../../interfaces/UserInterface"

export const UserLists = () => {
  const dispatch = useDispatch()
  const pinnedUsers = useSelector((state: RootState) => state.users.pinned)
  const allUsers = useSelector((state: RootState) => state.users.all)
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)

  return (
    <div>
      <div className="">
        <label className="text-sm font-semibold text-slate-700 pl-2">#Pinned</label>
        {
          pinnedUsers?.length
            ? <div>
                {
                  pinnedUsers.map((user) => {
                    return (
                      <div
                        key={user.id}
                        className={`p-3 cursor-pointer ${selectedUserToChat && selectedUserToChat.id === user.id ? 'bg-gray-200' : ''}`}
                        onClick={() => {dispatch(setSelectedUserToChat({user}))}}
                      >
                        <ProfileImage user={user}/>
                      </div>
                    )
                  })
                }
              </div>
            : <div className="text-sm text-zinc-500 flex items-center justify-center">
                <p>No pinned contacts</p>
              </div>
        }
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-700 pl-2">#All</label>
        {
          allUsers.length &&
          <div style={{height: 'calc(100vh - 310px)'}}>
            {
              allUsers.map((user) => {
                return (
                  <div
                    key={user.id}
                    className={`p-3 cursor-pointer ${selectedUserToChat && selectedUserToChat.id === user.id ? 'bg-gray-200' : ''}`}
                    onClick={() => {dispatch(setSelectedUserToChat({user}))}}
                  >
                    <ProfileImage user={user}/>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  )
}
