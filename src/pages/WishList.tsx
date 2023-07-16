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

export default function WishList() {
  const data = [
    {
      label: 'Wish List',
      value: 'Wish List',
      icon: HeartIcon,
      desc: 'Wish List',
    },
    {
      label: 'Reading',
      value: 'Reading',
      icon: BookOpenIcon,
      desc: 'Reading List',
    },
    {
      label: 'Plan To Read',
      value: 'Plan To Read',
      icon: BookmarkIcon,
      desc: 'Plan To Read List',
    },
    {
      label: 'Completed',
      value: 'Completed',
      icon: CheckBadgeIcon,
      desc: 'Completed List',
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {desc}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
