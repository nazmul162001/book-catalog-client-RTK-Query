import { Outlet } from 'react-router-dom'
import NavMenu from './NavMenu'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className=''>
      <NavMenu />
      <div className='pt-5 px-5'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
