import { Button } from '@material-tailwind/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Textarea } from '@material-tailwind/react'
import {
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useGetBooksQuery,
} from '../redux/features/books/bookApiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { getAccessToken } from '../redux/api/apiSlice'
import Swal from 'sweetalert2'
import EditDialog from '../components/EditDialog'

type ReviewFormValues = {
  message: string
}

export default function SingleBook() {
  const { id } = useParams()
  // const { data: book, isLoading, isError } = useGetBookByIdQuery(id)

  const {
    data: book,
    isLoading,
    isError,
  } = useGetBookByIdQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 500,
  })

  const navigate = useNavigate()

  const currentUser = book?.data?.userEmail
  const accessToken = getAccessToken()
  const isCurrentUser = currentUser === accessToken?.userEmail

  // console.log(isCurrentUser)
  // console.log(accessToken)
  // console.log(currentUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormValues>()

  const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
    console.log(data)
  }

  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation()

  
  

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
        deleteBook(id)
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
              Author :<span className='text-gray-800'>{book?.data?.author}</span>
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
            <div className='w-full flex gap-3'>
              <EditDialog book={book} />
              <Button className='w-28' color='red' onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className='comment px-10'>
        <h4 className='text-gray-500'>Write your review</h4>
        <div className='w-96'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              label='Message'
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <span className='text-red-500'>{errors.message.message}</span>
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
            Nice Book, Recommended to Read This book ❤️
          </p>
        </div>
      </div>
    </div>
  )
}
