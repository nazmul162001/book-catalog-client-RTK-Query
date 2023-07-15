import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from '@material-tailwind/react'
import {
  StarIcon,
  HeartIcon,
  TvIcon,
  FireIcon,
  BookOpenIcon,
  BookmarkIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/solid'

export default function BookCard() {
  return (
    <>
      <Card className='w-full shadow-lg cursor-pointer'>
        <CardHeader floated={false} color='blue-gray'>
          <img
            src='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='ui/ux review check'
          />
          <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ' />
        </CardHeader>
        <CardBody>
          <div className='mb-3 flex items-center justify-between'>
            <Typography variant='h5' color='blue-gray' className='font-medium'>
              book title
            </Typography>
            <Typography
              color='blue-gray'
              className='flex items-center gap-1.5 font-normal'
            >
              <StarIcon className='-mt-0.5 h-5 w-5 text-yellow-700' />
              5.0
            </Typography>
          </div>
          <Typography color='gray'>
            <p>Author: </p>
          </Typography>
          <Typography color='gray'>
            <p>Genre: </p>
          </Typography>
          <Typography color='gray'>
            <p>Publication: </p>
          </Typography>
          <div className='group mt-8 flex flex-wrap items-center justify-between px-3'>
            <Tooltip content='Add to Wish List'>
              <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                <HeartIcon className='h-5 w-5' />
              </span>
            </Tooltip>
            <Tooltip content='Reading'>
              <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                <BookOpenIcon className='h-5 w-5' />
              </span>
            </Tooltip>
            <Tooltip content='Plan to read'>
              <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                <BookmarkIcon className='h-5 w-5' />
              </span>
            </Tooltip>
            <Tooltip content='Complete'>
              <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                <CheckBadgeIcon className='h-5 w-5' />
              </span>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
