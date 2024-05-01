import { useSelector } from "react-redux"
import { RootState } from "../store"
import { ReactElement, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export const GuestGuard = ({ children }: {children: ReactElement | null}) => {
  const authUser = useSelector((state: RootState) => state.auth.user)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(authUser) {
      if (location.state && location.state.prevRoute) navigate(location.state.prevRoute, { replace: true })
      else navigate('/', { replace: true })
    }
  }, [authUser, location, navigate])

  return (children)
}
