// import CurrentUserEmail from '../../layouts/CurrentUserEmail'
// import Loader from '../../layouts/Spinner'
// import { useGetAllWishListQuery } from '../../redux/features/books/bookApiSlice'

// export default function AllWishList() {
//   const {
//     data: wishList,
//     isLoading,
//   } = useGetAllWishListQuery(undefined, {
//     refetchOnMountOrArgChange: true,
//     pollingInterval: 500,
//   })

//   // console.log(wishList?.data)
//   const currentUserEmail = CurrentUserEmail()

//   if (isLoading) {
//     return <Loader />
//   }

//   // Filter wishList data based on matching userEmail
//   const filteredWishList = wishList?.data?.filter(
//     (item: any) => item.userEmail === currentUserEmail && item.status === 'wishList'
//   );
  

//   return (
//     <div>
//       <div>
//         {filteredWishList &&
//           filteredWishList?.map((item: any) => (
//             <div key={item._id}>
//               <p>{item?.bookId?.title}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }
