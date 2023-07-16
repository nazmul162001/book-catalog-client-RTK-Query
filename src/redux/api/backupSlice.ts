// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import Cookies from 'js-cookie'
// import { BASE_URL } from '../../config'
// import { CreateBookFormValues } from '../../components/AddNewDialog'

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//     prepareHeaders: (headers) => {
//       const accessToken = getAccessToken()
//       if (accessToken) {
//         headers.set('authorization', `Bearer ${accessToken}`)
//       }
//       return headers
//     },
//   }),
//   endpoints: (builder) => ({
//     signup: builder.mutation<any, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: '/auth/signup',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     login: builder.mutation<any, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: '/auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     createBook: builder.mutation<any, CreateBookFormValues>({
//       query: (bookData) => ({
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         url: '/books',
//         method: 'POST',
//         body: bookData,
//       }),
//     }),
//   }),
// })

// export const { useSignupMutation, useLoginMutation, useCreateBookMutation } =
//   api

// export const getAccessToken = () => {
//   return Cookies.get('accessToken')
// }
