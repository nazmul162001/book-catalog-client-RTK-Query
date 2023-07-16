import Loader from "../../layouts/Spinner";
import { useGetBooksQuery } from "../../redux/features/books/bookApiSlice";

export default function AllWishList() {
  const { data: books, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredBooks = books?.data?.filter((book) => book.status === 'wishList');

  return (
    <div>
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
        </div>
      ))}
    </div>
  );
}
