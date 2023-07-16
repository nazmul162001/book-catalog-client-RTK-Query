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
      invalidatesTags: ['newBook'],
    }),
    getBooks: builder.query<any, void>({
      query: () => '/books',
      providesTags: ['newBook'],
    }),
    searchBooks: builder.query<any, string>({
      query: (searchTerm) => `/books?searchTerm=${searchTerm}`,
      providesTags: ['newBook'],
    }),
    getBookById: builder.query<any, string>({
      query: (id) => `/books/${id}`,
    }),
    deleteBook: builder.mutation<any, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
    }),
    updateBook: builder.mutation<any, { id: string, bookData: CreateBookFormValues }>({
      query: ({ id, bookData }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: bookData,
      }),
    }),
  }),
});
export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useSearchBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi
