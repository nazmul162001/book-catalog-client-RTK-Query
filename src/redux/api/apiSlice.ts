import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:5000' // Replace with your actual backend URL

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signup: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useSignupMutation } = api
