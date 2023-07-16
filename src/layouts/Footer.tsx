import { Typography } from '@material-tailwind/react'

export default function Example() {
  return (
    <footer className='w-full bg-white shadow-inner p-8 mt-20 border-t-5 border-gray-500'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between'>
        <h3>Book Catalog</h3>
        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Wish List
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Reading List
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Plan to Read
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Completed List
            </Typography>
          </li>
        </ul>
      </div>
      <hr className='my-8 border-blue-gray-50' />
      <Typography color='blue-gray' className='text-center font-normal'>
        &copy; 2023 Book Catalog
      </Typography>
    </footer>
  )
}
