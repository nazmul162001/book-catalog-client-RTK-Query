import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export default function PrivateRoute({ children }: IProps) {
  return children
}
