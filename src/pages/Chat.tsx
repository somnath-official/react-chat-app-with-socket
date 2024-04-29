import { ChatArea } from "../components/chat/ChatArea"
import { ChatHeader } from "../components/chat/ChatHeader"
import { UserLists } from "../components/chat/UserLists"

export const Chat = () => {
  return (
    <div className="h-screen">
      <ChatHeader />
      <div className="flex flex-row gap-x-0 border-t" style={{height: 'calc(100vh - 56px)',}}>
        <div className="w-3/12 bg-white rounded-bl overflow-y-auto border-r">
          <UserLists />
        </div>
        <div className="w-9/12 p-3 bg-slate-200 rounded-br overflow-y-auto">
          <ChatArea />
        </div>
      </div>
    </div>
  )
}
