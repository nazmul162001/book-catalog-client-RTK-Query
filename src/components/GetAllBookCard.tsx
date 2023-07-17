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
  BookOpenIcon,
  BookmarkIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { BookCardProps } from './AddNewDialog'

export default function GetAllBookCard({ book }: BookCardProps) {
  // console.log(book)
  const {
    title,
    author,
    genre,
    image,
    publicationDate,
  } = book

  return (
    <>
      <Link to={`/books/${book._id}`}>
        <Card className='w-full shadow-lg'>
          <CardHeader floated={false} color='blue-gray'>
            <img src={image} alt='ui/ux review check' />
          </CardHeader>
          <CardBody>
            <div className='mb-3 flex items-center justify-between'>
              <Typography
                variant='h6'
                color='blue-gray'
                className='font-medium'
              >
                {title.slice(0, 15)}
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
              <p className='text-sm'>Author: {author}</p>
            </Typography>
            <Typography color='gray'>
              <p className='text-sm'>Genre: {genre} </p>
            </Typography>
            <Typography color='gray'>
              <p className='text-sm'>Publication: {publicationDate}</p>
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
      </Link>
    </>
  )
}
