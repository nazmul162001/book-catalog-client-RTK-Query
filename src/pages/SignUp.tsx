import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignupMutation } from '../redux/features/user/userApi'

type SignUpFormValues = {
  email: string
  password: string
  termsAndConditions: boolean
}

const signUpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
})
console.log(signUpSchema)

export default function SignUp() {
  const [err, setErr] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignUpFormValues>()

  const [signup, { isLoading }] = useSignupMutation()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      setErr('')
      await signup({ email: data.email, password: data.password }).unwrap()
      navigate('/login')
    } catch (error) {
      // console.log(error?.data?.message)
      // setErr(error?.data?.message)
      if (error?.data?.message === 'User already exists') {
        setErr('User already exists')
      } else {
        console.error('Signup failed:', error)
      }
    }
  }
  console.log(err)
  const termsAndConditionsChecked = watch('termsAndConditions')

  return (
    <section className='w-full h-full md:h-[80vh] flex justify-center items-center'>
      <Card color='transparent' shadow={false}>
        <Typography variant='h4' color='blue-gray'>
          Sign Up
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'>
          Enter your details to register.
        </Typography>
        <form
          className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='mb-4 flex flex-col gap-6'>
            <Input
              size='lg'
              label='Email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {err && !errors.email && (
              <span className='text-red-500'>{err}</span>
            )}
            {errors.email && (
              <span className='text-red-500'>{errors.email.message}</span>
            )}
            <Input
              type='password'
              size='lg'
              label='Password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
            />
            {errors.password && (
              <span className='text-red-500'>{errors.password.message}</span>
            )}
          </div>
          <Checkbox
            label={
              <Typography
                variant='small'
                color='gray'
                className='flex items-center font-normal'
              >
                I agree to the
                <a
                  href='#'
                  className='font-medium transition-colors hover:text-blue-500'
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
            {...register('termsAndConditions', {
              required: 'Please accept the Terms and Conditions',
            })}
          />
          {errors.termsAndConditions && (
            <span className='text-red-500'>
              {errors.termsAndConditions.message}
            </span>
          )}
          <Button
            className='mt-6'
            fullWidth
            type='submit'
            disabled={!termsAndConditionsChecked || isSubmitting}
          >
            Register
          </Button>
          <Typography color='gray' className='mt-4 text-center font-normal'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='font-medium text-blue-500 transition-colors hover:text-blue-700'
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </section>
  )
}
