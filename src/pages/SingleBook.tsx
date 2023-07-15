import { Button } from '@material-tailwind/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Textarea } from '@material-tailwind/react'

type ReviewFormValues = {
  message: string
}

export default function SingleBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormValues>()

  const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
    console.log(data)
  }

  return (
    <div className='w-full h-full'>
      <section className='w-full mb-10 grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='w-full h-[450px] flex justify-center'>
          <img
            className='w-full h-full shadow-inner p-5 m-5'
            src='https://camo.envatousercontent.com/912e6b79e01a13c76aa21264ea6b45921c9ccaac/687474703a2f2f6465762e77706f70616c2e636f6d2f6f70616c2d70726f66696c652f696d616765732f626f6f6b6f72792f312e6a7067'
            alt=''
          />
        </div>
        <div className='w-full h-full shadow-inner p-5 m-5 flex items-center'>
          <div className='w-full h-4/5'>
            <h3 className='text-xl md:text-3xl lg:text-4xl'>Book Title</h3>
            <p className='text-gray-500 py-3'>
              Author : <span className='text-gray-800'>Jhon Week</span>
            </p>
            <p className='text-gray-500'>
              Genre : <span className='text-gray-800'>Jhon Week</span>
            </p>
            <p className='text-gray-500 py-3'>
              Publication Date :{' '}
              <span className='text-gray-800'>Jhon Week</span>
            </p>
            <div className='w-full flex gap-3'>
              <Button>Edit</Button>
              <Button color='red'>Delete</Button>
            </div>
          </div>
        </div>
      </section>
      <div className='comment px-10'>
      <h4 className='text-gray-500'>Write your review</h4>
      <div className='w-96'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea label='Message' {...register('message', { required: 'Message is required' })} />
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
