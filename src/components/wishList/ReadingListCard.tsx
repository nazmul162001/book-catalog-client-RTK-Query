import { useState, useEffect } from 'react'
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
import { toast } from 'react-toastify'
import { useAddToWishListMutation } from '../../redux/features/books/bookApiSlice'
import { ItemCardProps } from '../AddNewDialog'

// Define the type for localStorageColors
type LocalStorageColors = {
  [key: string]: string
}

export default function ReadingListCard({ item }: ItemCardProps) {
  const [localStorageColors, setLocalStorageColors] =
    useState<LocalStorageColors>({})
  //   console.log(item?.bookId?.author)

  const { title, author, genre, image, publicationDate, _id } = item?.bookId
  

  const [addToWishList] = useAddToWishListMutation()

  const handleAddToWishList = async (status: string) => {
    try {
      await addToWishList({ bookId: _id, status: status })

      const toastMessage =
        localStorageColors[_id] === status
          ? `Removed from ${status} List`
          : `Added to ${status} List`

      toast.success(toastMessage, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
      })

      // Toggle the color
      const updatedColors = { ...localStorageColors }
      updatedColors[_id] = localStorageColors[_id] === status ? '' : status
      localStorage.setItem('tooltipButtonColors', JSON.stringify(updatedColors))
      setLocalStorageColors(updatedColors)
    } catch (error) {
      console.error('Failed to add to Wish List:', error)
      toast.error('Failed to add to Wish List', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
      })
    }
  }

  useEffect(() => {
    // Retrieve the colors from localStorage on component mount
    const storedColors = localStorage.getItem('tooltipButtonColors')
    if (storedColors) {
      setLocalStorageColors(JSON.parse(storedColors))
    }
  }, [])

  const getIconColor = (status: string) => {
    return localStorageColors[_id] === status ? 'text-red-500' : 'text-gray-500'
  }

  return (
    <>
      <Card className='w-full shadow-lg relative'>
        <Link className='pb-12' to={`/books/${item?.bookId?._id}`}>
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
          </CardBody>
        </Link>
        <div className='group absolute bottom-2 bg-white left-10 flex flex-wrap items-center justify-between px-3'>
          <Tooltip content='Add to Wish List'>
            <span
              onClick={() => handleAddToWishList('wishList')}
              className={`cursor-pointer rounded-full border border-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70`}
            >
              <HeartIcon className={`h-5 w-5 ${getIconColor('wishList')}`} />
            </span>
          </Tooltip>
          <Tooltip content='Reading'>
            <span
              onClick={() => handleAddToWishList('reading')}
              className={`cursor-pointer rounded-full border border-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70`}
            >
              <BookOpenIcon className={`h-5 w-5 ${getIconColor('reading')}`} />
            </span>
          </Tooltip>
          <Tooltip content='Plan to read'>
            <span
              onClick={() => handleAddToWishList('plan')}
              className={`cursor-pointer rounded-full border border-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70`}
            >
              <BookmarkIcon className={`h-5 w-5 ${getIconColor('plan')}`} />
            </span>
          </Tooltip>
          <Tooltip content='Complete'>
            <span
              onClick={() => handleAddToWishList('complete')}
              className={`cursor-pointer rounded-full border border-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70`}
            >
              <CheckBadgeIcon
                className={`h-5 w-5 ${getIconColor('complete')}`}
              />
            </span>
          </Tooltip>
        </div>
      </Card>
    </>
  )
}
