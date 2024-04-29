import { ChatArea } from "../components/chat/ChatArea"
import { ChatHeader } from "../components/chat/ChatHeader"
import { UserLists } from "../components/chat/UserLists"

export const Chat = () => {
  return (
    <div className="">
      <ChatHeader />
      <div className="flex flex-row gap-x-0 mt-1" style={{height: 'calc(100vh - 80px)',}}>
        <div className="w-3/12 bg-white rounded-tl rounded-bl overflow-y-auto border-r">
          <UserLists />
        </div>
        <div className="w-9/12 p-3 bg-white rounded-tr rounded-br overflow-y-auto">
          <ChatArea />
        </div>
      </div>
    </div>
  )
}
