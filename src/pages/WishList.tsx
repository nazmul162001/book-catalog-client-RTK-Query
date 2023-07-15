import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import {
  HeartIcon,
  BookOpenIcon,
  BookmarkIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/solid'
import BookCard from '../components/BookCard'

export default function Example() {
  const data = [
    {
      label: 'Wish List',
      value: 'Wish List',
      icon: HeartIcon,
      desc: <BookCard />,
    },
    {
      label: 'Reading',
      value: 'Reading',
      icon: BookOpenIcon,
      desc: <BookCard />,
    },
    {
      label: 'Plan To Read',
      value: 'Plan To Read',
      icon: BookmarkIcon,
      desc: <BookCard />,
    },
    {
      label: 'Completed',
      value: 'Completed',
      icon: CheckBadgeIcon,
      desc: <BookCard />,
    },
  ]
  return (
    <Tabs value='Wish List'>
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className='flex items-center gap-2'>
              {React.createElement(icon, { className: 'w-5 h-5' })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <div className='grid grid-cols-4'>{desc}</div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}