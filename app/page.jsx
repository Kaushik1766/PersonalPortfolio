'use client'
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import About from '@/components/About'
import Resume from '@/components/Resume'


const pages = [
  {
    component: <About />,
  },
  {
    component: <Resume />
  }
]

function Page() {
  const tab = useAppSelector((state) => state.tabs.currentTab)
  return (
    <>
      {
        pages.map((item, idx) => {
          if (tab == idx) {
            return <div key={idx}>
              {item.component}
            </div>
          }

        })
      }
    </>
  )
}

export default Page