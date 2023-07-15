import BookList from '../components/BookList'

export default function Home() {
  return (
    <>
      <section className='banner w-full'>
        <img className='w-full' src='banner.jpeg' alt='book/image' />
        {/* bookList component */}
        <BookList />
      </section>
    </>
  )
}
