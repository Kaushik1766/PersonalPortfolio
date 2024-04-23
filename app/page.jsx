'use client'
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import About from '@/components/About'

function Page() {
  const tab = useAppSelector((state) => state.tabs.currentTab)
  return (
    <>
      {
        tab == 0 && <About />
      }
    </>
  )
}

export default Page