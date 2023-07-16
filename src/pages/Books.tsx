import {useState} from 'react'
import AllBooks from "../components/AllBooks";
import Search from "../components/Search";

export default function Books() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <section className='bookList'>
        <div className='books'>
          <Search setSearchTerm={setSearchTerm} />
          <AllBooks searchTerm={searchTerm}  />
        </div>
      </section>
    </>
  )
}
