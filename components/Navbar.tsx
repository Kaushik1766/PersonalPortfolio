'use client'
import { setTab } from '@/Redux/features/tabs'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const tabs = [
    'About',
    'Resume',
    'Projects',
    'Skills',
    'Contact'
]

function navbar() {

    const dispatch = useAppDispatch()
    const tab = useAppSelector((state: any) => state.tabs.currentTab)
    return (
        <div className='w-full h-full flex flex-col p-4 py-10 justify-between'>
            {/* name */}
            <h1 className='text-center text-3xl font-bold'>Kaushik</h1>

            {/* tabs */}
            <div className='flex flex-col gap-3'>
                {
                    tabs.map((item, idx) => (
                        <div className={`btn ${tab == idx ? 'bg-primary' : 'bg-neutral'}`} onClick={() => {
                            dispatch(setTab(idx))
                        }} key={idx}>
                            {item}
                        </div>
                    ))
                }
            </div>
            {/* footer */}
            <div className='w-full p-4 flex text-2xl justify-evenly'>
                <Link href={'#'}>
                    <FaGithub />
                </Link>
                <Link href={'#'}>
                    <FaLinkedin />
                </Link>
                <Link href={'#'}>
                    <FaInstagram />
                </Link>

            </div>
        </div>
    )
}

export default navbar