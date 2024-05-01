import { useSelector } from "react-redux"
import { RootState } from "../store"
import { ReactElement, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const AuthGuard = ({ children }: {children: ReactElement | null}) => {
  const authUser = useSelector((state: RootState) => state.auth.user)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(!authUser) navigate('login', { replace: true, state: {prevRoute: location.pathname} });
  }, [authUser, location.pathname, navigate])

  return (children)
}
