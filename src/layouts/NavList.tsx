import { Typography, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import AddNewDialog from '../components/AddNewDialog'

export default function NavList() {
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
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium'
        >
          <Link
            to='/signUp'
            className='flex items-center hover:text-blue-500 transition-colors'
          >
            Sign Up
          </Link>
        </Typography>
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium'
        >
          <AddNewDialog />
        </Typography>
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium'
        >
          <Link
            to='/logout'
            className='flex items-center hover:text-blue-500 transition-colors'
          >
            <Button variant='gradient' size='sm' fullWidth>
              Log Out
            </Button>
          </Link>
        </Typography>
      </ul>
    </>
  )
}
