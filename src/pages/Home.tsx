import BookList from '../components/BookList'
import Search from '../components/Search'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <section className='banner w-full'>
        <Search setSearchTerm={setSearchTerm} />
        <img className='w-full' src='banner.jpeg' alt='book/image' />
        {/* bookList component */}
        <BookList searchTerm={searchTerm} />
      </section>
    </>
  )
}
