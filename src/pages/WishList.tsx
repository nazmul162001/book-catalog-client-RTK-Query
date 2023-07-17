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

import AllWishList from '../components/wishList/AllWishList'
import Completed from '../components/wishList/Completed'
import ReadingList from '../components/wishList/ReadingList'
import PlanToReadList from '../components/wishList/PlanToReadList'

export default function WishList() {
  const data = [
    {
      label: 'Wish List',
      value: 'Wish List',
      icon: HeartIcon,
      desc: <AllWishList />,
    },
    {
      label: 'Reading',
      value: 'Reading',
      icon: BookOpenIcon,
      desc: <ReadingList />,
    },
    {
      label: 'Plan To Read',
      value: 'Plan To Read',
      icon: BookmarkIcon,
      desc: <PlanToReadList />,
    },
    {
      label: 'Completed',
      value: 'Completed',
      icon: CheckBadgeIcon,
      desc: <Completed />,
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
            <div className=''>
              {desc}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
