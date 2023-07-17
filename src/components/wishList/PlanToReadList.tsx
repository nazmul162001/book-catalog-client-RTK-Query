import CurrentUserEmail from '../../layouts/CurrentUserEmail'
import Loader from '../../layouts/Spinner'
import { useGetAllWishListQuery } from '../../redux/features/books/bookApiSlice'
import PlanToReadCard from './PlanToReadCard'

export default function PlanToReadList() {
  const { data: wishList, isLoading } = useGetAllWishListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 500,
  })

  // console.log(wishList?.data)
  const currentUserEmail = CurrentUserEmail()

  if (isLoading) {
    return <Loader />
  }

  // Filter wishList data based on matching userEmail
  const filteredWishList = wishList?.data?.filter(
    (item: any) =>
      item.userEmail === currentUserEmail && item.status === 'plan'
  )

  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        {filteredWishList &&
          filteredWishList?.map((item: any) => (
            <PlanToReadCard item={item} key={item?._id} />
          ))}
      </div>
    </div>
  )
}
