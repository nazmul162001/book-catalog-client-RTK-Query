import { Typography, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import AddNewDialog from '../components/AddNewDialog'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getAccessToken } from '../redux/api/apiSlice'

export default function NavList() {
  const navigate = useNavigate()
  const accessToken = getAccessToken()

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Log Out',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('accessToken') // Clear the access token from the cookie
        navigate('/login') // Redirect the user to the login page
      }
    })
  }

  return (
    <>
      <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium'
        >
          <Link
            to='/books'
            className='flex items-center hover:text-blue-500 transition-colors'
          >
            books
          </Link>
        </Typography>
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium'
        >
          <Link
            to='/wishlist'
            className='flex items-center hover:text-blue-500 transition-colors'
          >
            wish List
          </Link>
        </Typography>
        {accessToken && (
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-medium'
          >
            <AddNewDialog />
          </Typography>
        )}

        {accessToken ? (
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-medium'
          >
            <Link
              to='/login'
              onClick={handleLogout}
              className='flex items-center hover:text-blue-500 transition-colors'
            >
              <Button variant='gradient' size='sm' fullWidth>
                Log Out
              </Button>
            </Link>
          </Typography>
        ) : (
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-medium'
          >
            <Link
              to='/login'
              // onClick={handleLogout}
              className='flex items-center hover:text-blue-500 transition-colors'
            >
              <Button variant='gradient' size='sm' fullWidth>
                Login
              </Button>
            </Link>
          </Typography>
        )}
      </ul>
    </>
  )
}
