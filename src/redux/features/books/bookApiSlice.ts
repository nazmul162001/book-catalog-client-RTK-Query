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
      invalidatesTags: ['newBook'],
    }),
    updateBook: builder.mutation<
      any,
      { id: string; bookData: CreateBookFormValues }
    >({
      query: ({ id, bookData }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: bookData,
      }),
      invalidatesTags: ['newBook'],
    }),
    updateBookStatus: builder.mutation<any, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['newBook'],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['review'],
    }),
    getReview: builder.query({
      query: (id) => `/books/review/${id}`,
      providesTags: ['review'],
    }),
    addToWishList: builder.mutation<any, { bookId: string; status: string }>({
      query: ({ bookId, status }) => ({
        url: '/wishList',
        method: 'POST',
        body: { bookId, status },
      }),
    }),
    getAllWishList: builder.query<any, void>({
      query: () => '/wishList',
    }),
  }),
})
export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useSearchBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetReviewQuery,
  usePostReviewMutation,
  useAddToWishListMutation,
  useGetAllWishListQuery
} = bookApi
