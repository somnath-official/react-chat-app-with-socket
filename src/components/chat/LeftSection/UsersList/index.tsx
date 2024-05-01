import { IUser } from "@/interfaces/UserInterface"
import { setSelectedUserToChat } from "@/store/features/chatSlice"
import { RootState } from "@/store/index"
import { useDispatch, useSelector } from "react-redux"
import { UserProfile } from "./UserProfile"
import { useRef, useState } from "react"
import gsap from "gsap"

export const UsersList = () => {
  const dispatch = useDispatch()
  const allContants = useSelector((state: RootState) => state.contants.all)
  const selectedUserToChat: IUser | null = useSelector((state: RootState) => state.chat.selectedUserToChat)
  const [showChatSection, setShowChatSection] = useState(false)
  const arrowDownRef = useRef(null)
  const chatListsRef = useRef(null)
  const chatListHeaderRef = useRef(null)

  const toggleSection = () => {
    const tl = gsap.timeline({defaults: {duration: 0.2}})
    if (!showChatSection) {
      tl
      .to(arrowDownRef.current, {rotate: -180,})
      .to(chatListsRef.current, {display: 'none', duration: 0,});
      gsap.to(chatListHeaderRef.current, {borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem', duration: 0.1})
    }
    else {
      tl
      .to(arrowDownRef.current, {rotate: 0,})
      .to(chatListsRef.current, {display: 'block',});
      gsap.to(chatListHeaderRef.current, {borderBottomLeftRadius: '0', borderBottomRightRadius: '0', duration: 0.1})
    }

    setShowChatSection(prev => ! prev)
  }

  return (
    <div className="mb-2">
      <div
        className="border py-1 px-3 rounded-t-lg flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
        ref={chatListHeaderRef}
      >
        <span>Chats</span>
        <i
          ref={arrowDownRef}
          className="fa fa-angle-down"
          style={{fontWeight: 400}}
        />
      </div>
      <div ref={chatListsRef} className="border-l border-r border-b rounded-b-lg">
        {
          allContants?.length
            ? <div>
                {
                  allContants.map((user) => {
                    return (
                      <div
                        key={user.id}
                        className={
                          `px-3 py-2 cursor-pointer ${selectedUserToChat && selectedUserToChat.id === user.id ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                        }
                        onClick={() => {dispatch(setSelectedUserToChat({user}))}}
                      >
                        <UserProfile user={user}/>
                      </div>
                    )
                  })
                }
              </div>
            : <div className="text-sm text-zinc-500 h-12 flex items-center justify-center">
                <p>No contacts</p>
              </div>
        }
      </div>
    </div>
  )
}
