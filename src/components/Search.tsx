import { Button, Input } from '@material-tailwind/react'
import { FiSearch } from 'react-icons/fi'

export default function Search({ setSearchTerm }: any) {
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value)
  }
  return (
    <>
      <div className='relative flex w-full gap-2 md:w-max m-auto mb-3'>
        <Input
          type='search'
          label='Search Book...'
          className='pr-20'
          containerProps={{
            className: 'min-w-[300px] md:min-w-[500px] lg:min-w-[800px]',
          }}
          onChange={handleSearchChange}
        />
        <Button size='sm' className='!absolute right-0 rounded h-full'>
          <FiSearch />
        </Button>
      </div>
    </>
  )
}
