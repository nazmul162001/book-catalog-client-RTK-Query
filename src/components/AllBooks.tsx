import GetAllBookList from './BookCard'
import { CreateBookFormValues } from './AddNewDialog'
import {
  useGetBooksQuery,
  useSearchBooksQuery,
} from '../redux/features/books/bookApiSlice'
import Loader from '../layouts/Spinner'

export default function AllBooks({searchTerm}) {
  // const { data: books, isLoading, isError } = useGetBooksQuery()
  const { data: books, isLoading, isError } = useSearchBooksQuery(searchTerm)

  // console.log(books?.data)

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className='bookList'>
      <div className='books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {books?.data &&
          books?.data?.map((book: CreateBookFormValues) => (
            <GetAllBookList key={book._id} book={book} />
          ))}
      </div>
    </section>
  )
}
