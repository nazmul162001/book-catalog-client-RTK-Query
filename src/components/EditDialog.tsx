import { Fragment, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Button,
  IconButton,
} from '@material-tailwind/react'
import {
  useCreateBookMutation,
  useUpdateBookMutation,
} from '../redux/features/books/bookApiSlice'

export type CreateBookFormValues = {
  title: string
  author: string
  genre: string
  publicationDate: string
  image?: string
  _id?: string
}

interface EditDialogProps {
  book: CreateBookFormValues
}

export default function EditDialog({ book }) {
  //   const { title, author, genre, image, publicationDate } = book?.data

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const handleCardOpen = () => setOpen((cur) => !cur)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBookFormValues>()

  const [updateBook] = useUpdateBookMutation()

  const onSubmit: SubmitHandler<CreateBookFormValues> = async (bookData) => {
    try {
      const updatedBookData = { ...bookData }
      delete updatedBookData._id
      const response = await updateBook({
        id: book?.data?._id,
        bookData: updatedBookData,
      }).unwrap()
      if (response) {
        handleOpen()
      }
    } catch (error) {
      console.error('Failed to update book:', error)
      // Handle the error case
    }
  }

  return (
    <Fragment>
      <Button
        className='w-28'
        color='blue'
        onClick={handleOpen}
        variant='outlined'
        size='sm'
      >
        Edit
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className='flex justify-between items-center pr-3'>
          <DialogHeader>Update Book</DialogHeader>
          <IconButton
            color='red'
            size='lg'
            variant='text'
            onClick={handleCardOpen}
          >
            <XMarkIcon strokeWidth={2} className='h-5 w-5' />
          </IconButton>
        </div>
        <DialogBody className='flex justify-center w-full' divider>
          <form
            className='mt-2 mb-2 w-full px-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='mb-4 flex flex-col gap-6'>
              <Input
                size='lg'
                label='Title'
                {...register('title', { required: 'Title is required' })}
                defaultValue={book?.data?.title}
              />
              {errors.title && (
                <span className='text-red-500'>{errors.title.message}</span>
              )}
              <Input
                size='lg'
                label='Author'
                {...register('author', { required: 'Author is required' })}
                defaultValue={book?.data?.author}
              />
              {errors.author && (
                <span className='text-red-500'>{errors.author.message}</span>
              )}
              <Input
                size='lg'
                label='Genre'
                {...register('genre', { required: 'Genre is required' })}
                defaultValue={book?.data?.genre}
              />
              {errors.genre && (
                <span className='text-red-500'>{errors.genre.message}</span>
              )}
              <Input
                size='lg'
                label='Publication Date'
                placeholder='DD/MM/YY'
                {...register('publicationDate', {
                  required: 'Publication Date is required',
                })}
                defaultValue={book?.data?.publicationDate}
              />
              {errors.publicationDate && (
                <span className='text-red-500'>
                  {errors.publicationDate.message}
                </span>
              )}
              <Input
                size='lg'
                label='Image URL'
                {...register('image')}
                defaultValue={book?.data?.image}
              />
            </div>
            <Button className='mt-6' fullWidth type='submit'>
              Update
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  )
}
