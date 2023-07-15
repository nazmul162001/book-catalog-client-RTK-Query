import { ReactNode } from 'react'
import { getAccessToken } from '../redux/api/apiSlice'
import { Navigate, useLocation } from 'react-router-dom'

interface IProps {
  children: ReactNode
}

export default function PrivateRoute({ children }: IProps) {
  const { pathname } = useLocation()
  const accessToken = getAccessToken()
  if (!accessToken) {
    return <Navigate to='/login' state={{ path: pathname }} />
  }

  return children
}
