import BookList from "../components/BookList";

export default function Books() {
  return (
    <>
    {/* homepage */}
      <section className='bookList'>
        <div className='books'>
          <BookList />
        </div>
      </section>
    </>
  )
}
