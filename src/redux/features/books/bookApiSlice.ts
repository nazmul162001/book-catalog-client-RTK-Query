import { CreateBookFormValues } from '../../../components/AddNewDialog'
import { api } from '../../api/apiSlice'

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<any, CreateBookFormValues>({
      query: (bookData) => ({
        url: '/books',
        method: 'POST',
        body: bookData,
      }),
    }),
    getBooks: builder.query<any, void>({
      query: () => '/books',
    }),
  }),
})

export const { useCreateBookMutation, useGetBooksQuery  } = bookApi
