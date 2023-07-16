import BookCard from '../components/BookCard'

export default function Books() {
  return (
    <>
    {/* homepage */}
      <section className='bookList'>
        <div className='books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <BookCard />
        </div>
      </section>
    </>
  )
}
