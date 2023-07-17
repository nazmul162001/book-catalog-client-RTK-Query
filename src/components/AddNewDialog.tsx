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
import { useCreateBookMutation } from '../redux/features/books/bookApiSlice'
import { toast } from 'react-toastify'

export type CreateBookFormValues = {
  bookId: {
    title: any
    author: any
    genre: any
    image: any
    publicationDate: any
    _id: any
  }
  title: string
  author: string
  genre: string
  publicationDate: string
  image?: string
  _id: string
}
export type BookCardProps = {
  book: CreateBookFormValues
}
export type ItemCardProps = {
  item: CreateBookFormValues
}

export default function AddNewDialog() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const handleCardOpen = () => setOpen((cur) => !cur)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBookFormValues>()

  const [createBook] = useCreateBookMutation();

  const onSubmit: SubmitHandler<CreateBookFormValues> = async (bookData) => {
    try {
      const response = await createBook(bookData).unwrap();
      console.log(response);
      toast.success('Book Created successful!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: true,
      })
      handleOpen()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Fragment>
      <Button onClick={handleOpen} variant='outlined' size='sm' fullWidth>
        Add New
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
          <DialogHeader>Create a New Book.</DialogHeader>
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
              />
              {errors.title && (
                <span className='text-red-500'>{errors.title.message}</span>
              )}
              <Input
                size='lg'
                label='Author'
                {...register('author', { required: 'Author is required' })}
              />
              {errors.author && (
                <span className='text-red-500'>{errors.author.message}</span>
              )}
              <Input
                size='lg'
                label='Genre'
                {...register('genre', { required: 'Genre is required' })}
              />
              {errors.genre && (
                <span className='text-red-500'>{errors.genre.message}</span>
              )}
              <Input
                type='date'
                size='lg'
                label='Publication Date'
                placeholder='DD/MM/YY'
                {...register('publicationDate', {
                  required: 'Publication Date is required',
                })}
              />
              {errors.publicationDate && (
                <span className='text-red-500'>
                  {errors.publicationDate.message}
                </span>
              )}
              <Input size='lg' label='Image URL' {...register('image')} />
            </div>
            <Button className='mt-6' fullWidth type='submit'>
              Create
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  )
}
