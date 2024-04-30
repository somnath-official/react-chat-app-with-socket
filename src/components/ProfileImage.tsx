import { IUser } from "../interfaces/UserInterface"
import moment from "moment"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ProfileImage = ({user}: {user: IUser | null}) => {
  const offlineStatusRef = useRef(null)
  const lastSeenRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.2}
    })

    const ctx = gsap.context(() => {
      
      if (offlineStatusRef.current && lastSeenRef.current) {
        tl
        .to(offlineStatusRef.current,{
          delay: 2,
          x: 10,
          opacity: 0,
          display: 'none',
        })
        .fromTo(lastSeenRef.current, {
          x: -10,
          opacity: 0,
          display: 'none',
        },
        {
          x: 0,
          opacity: 1,
          display: 'block',
          ease: 'expo.in',
        })
      }
    })

    return () => ctx.revert()
  }, [])

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
                  <div ref={offlineStatusRef}>Offline</div>
                  <div ref={lastSeenRef}>Last seen: {`${user.lastSeen ? moment(user.lastSeen).calendar() : ''}`}</div>
                </span>
          }
        </div>
      </div>
    )
  }

  return <></>
}
