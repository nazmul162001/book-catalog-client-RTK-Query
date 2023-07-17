import { Button } from '@material-tailwind/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Textarea } from '@material-tailwind/react'
import {
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useGetReviewQuery,
  usePostReviewMutation,
} from '../redux/features/books/bookApiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import EditDialog from '../components/EditDialog'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Avatar } from '@material-tailwind/react'
import CurrentUserEmail from '../layouts/CurrentUserEmail'
import { getAccessToken } from '../redux/api/apiSlice'

type ReviewFormValues = {
  reviews: string
}

export default function SingleBook() {
  const { id } = useParams()
  const token = getAccessToken()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { data: book } = useGetBookByIdQuery(id!, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 500,
  })

  // get review
  const { data: reviewData } = useGetReviewQuery(id)

  const [postReview, {}] = usePostReviewMutation()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormValues>()

  const onSubmit: SubmitHandler<ReviewFormValues> = async (data) => {
    if (!token) {
      navigate('/login')
      toast.error('Please login to create a review', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
      })
      return
    }

    try {
      await postReview({ id, data: { reviews: data.reviews } }).unwrap()
      toast.success('Review added successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
      })
      reset() // Clear the form fields
    } catch (error) {
      console.log(error)
    }
  }

  const [deleteBook, {}] = useDeleteBookMutation()

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this book!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id!)
          .unwrap()
          .then(() => {
            Swal.fire('Deleted!', 'Your book has been deleted.', 'success')
            navigate('/books')
          })
          .catch((error) => {
            Swal.fire('Error!', 'Failed to delete book.', 'error')
            console.error('Failed to delete book:', error)
          })
      }
    })
  }

  // check login user email && bookData email
  const userEmail = CurrentUserEmail()
  const bookEmail = book?.data?.userEmail
  const isCurrentUser = userEmail === bookEmail

  return (
    <div className='w-full h-full'>
      <section className='w-full mb-10 grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='w-full h-[450px] flex justify-center'>
          <img
            className='w-full h-full shadow-inner p-5 m-5'
            src={book?.data?.image}
            alt=''
          />
        </div>
        <div className='w-full h-full shadow-inner p-5 m-5 flex items-center'>
          <div className='w-full h-4/5'>
            <h3 className='text-lg md:text-2xl lg:text-4xl'>
              {book?.data?.title}
            </h3>
            <p className='text-gray-500 py-3'>
              Author :
              <span className='text-gray-800'>{book?.data?.author}</span>
            </p>
            <p className='text-gray-500'>
              Genre :<span className='text-gray-800'>{book?.data?.genre}</span>
            </p>
            <p className='text-gray-500 py-3'>
              Publication Date :
              <span className='text-gray-800'>
                {book?.data?.publicationDate}
              </span>
            </p>
            {isCurrentUser && (
              <div className='w-full flex gap-3'>
                <EditDialog book={book} />
                <Button className='w-28' color='red' onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className='comment px-10'>
        <h4 className='text-gray-500 my-3'>Book review</h4>
        <div className='w-96'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              label='Write a review...'
              {...register('reviews', { required: 'Review is required' })}
            />
            {errors.reviews && (
              <span className='text-red-500'>{errors.reviews.message}</span>
            )}
            <Button className='mt-6' fullWidth type='submit'>
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className='userReview px-10 my-5 pt-10'>
        <div className='user'>
          <p className='text-gray-800 text-sm'>
            {reviewData?.data?.reviews &&
              reviewData?.data?.reviews.map((review: string) => (
                <div className='flex items-center my-3'>
                  <Avatar
                    src='https://img.freepik.com/free-icon/man_318-233556.jpg?w=2000'
                    alt='avatar'
                  />
                  <p className='ml-4'> {review} </p>
                </div>
              ))}
          </p>
        </div>
      </div>
    </div>
  )
}
