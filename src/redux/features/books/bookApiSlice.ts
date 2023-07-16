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
    searchBooks: builder.query<any, string>({
      query: (searchTerm) => `/books?searchTerm=${searchTerm}`,
    }),
    getBookById: builder.query<any, string>({
      query: (id) => `/books/${id}`,
    }),
  }),
})

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useSearchBooksQuery,
} = bookApi
