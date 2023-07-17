import Loader from '../../layouts/Spinner'
import { useGetAllWishListQuery } from '../../redux/features/books/bookApiSlice'

export default function AllWishList() {
  const { data: wishList, isLoading, isError } = useGetAllWishListQuery()

  // console.log(wishList?.data)

  if (isLoading) {
    return <Loader /> // Display a loader while the data is being fetched
  }

  return (
    <div>
      <div>
        {wishList?.data && wishList?.data.map((item) => (
          <div key={item._id}>
            <p>{item?.bookId?.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
