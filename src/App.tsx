import '@/scss/App.scss'
import { Rotres } from '@/routes/index'
import { useEffect } from 'react'
import {LOCAL_STORAGE_AUTH_USER} from './constants'
import { useDispatch } from 'react-redux'
import { setUser } from './store/features/authSlice'
import { IUser } from './interfaces/UserInterface'

const App = () => {
  const dispatch = useDispatch()

  // TODO
  /**
   * Need to fetch token from local storage and validate user
   */
  const getUserFromLocalStorage = (): Promise<IUser | null> => {
    return new Promise((reslove) => {
      const token = localStorage.getItem(LOCAL_STORAGE_AUTH_USER)
      if (token) reslove(JSON.parse(token))
        else reslove(null)
    })
  }

  useEffect(() => {
    const init = async () => {
      try {
        const user: IUser | null = await getUserFromLocalStorage()
        if (user) {dispatch(dispatch(setUser({user})))}
      } catch (e) {
        console.log('Something went wrong!')
      }
    }

    init()
  }, [dispatch])

  return (
    <Rotres />
  )
}

export default App
