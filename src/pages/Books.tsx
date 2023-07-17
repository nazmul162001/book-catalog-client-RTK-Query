import {useState} from 'react'
import AllBooks from "../components/AllBooks";
import Search from "../components/Search";
import FilterByPublicationYear from '../components/FilterByPublicationYear';
import FilterByGenre from '../components/FilterByGenre';

export default function Books() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <section className='bookList'>
        <div className='books'>
          <Search setSearchTerm={setSearchTerm} />
          <div className='flex flex-wrap w-full justify-center my-5 gap-3'>
            <FilterByPublicationYear />
            <FilterByGenre />
          </div>
          <AllBooks searchTerm={searchTerm}  />
        </div>
      </section>
    </>
  )
}
