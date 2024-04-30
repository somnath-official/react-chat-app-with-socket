import { ChatHeader } from "@/components/chat/ChatHeader"
import { LeftSection } from "@/components/chat/LeftSection"
import { RightSection } from "@/components/chat/RightSection"

export const Chat = () => {
  return (
    <div className="h-screen">
      <ChatHeader />
      <div className="flex flex-row gap-x-0 border-t" style={{height: 'calc(100vh - 56px)',}}>
        <div className="w-3/12 bg-white overflow-y-auto border-r p-1">
          <LeftSection />
        </div>
        <div className="w-9/12 p-3 bg-slate-200 overflow-y-auto">
          <RightSection />
        </div>
      </div>
    </div>
  )
}
