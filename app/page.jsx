'use client'
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'

function page() {
  const tab = useAppSelector((state) => state.tabs.currentTab)
  return (
    <>
      <div className='w-full'>{tab}</div>
    </>
  )
}

export default page