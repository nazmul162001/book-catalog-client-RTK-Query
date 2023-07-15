import BookCard from './BookCard'

export default function BookList() {
  return (
    <>
      <section className='bookList'>
        <h2 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 py-5'>
          Recently Added Books
        </h2>
        <div className='books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <BookCard />
        </div>
      </section>
    </>
  )
}
