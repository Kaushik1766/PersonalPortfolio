'use client'
import { setTab } from '@/Redux/features/tabs'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const tabs = [
    {
        name: 'About',
        link: '/'
    },
    {
        name: 'Resume',
        link: '/Resume'
    },
    {
        name: 'Projects',
        link: '/Projects'
    },
    {
        name: 'Skills',
        link: '/Skills'
    },
    {
        name: 'Contact',
        link: '/Contact'
    },
]


const links = [
    {
        link: 'https://github.com/Kaushik1766',
        icon: <FaGithub></FaGithub>
    },
    {
        link: 'https://www.linkedin.com/in/kaushiksaha176/',
        icon: <FaLinkedin></FaLinkedin>
    },
    {
        link: 'https://www.instagram.com/kaushiksaha176/',
        icon: <FaInstagram></FaInstagram>
    },
]
function Navbar() {

    const dispatch = useAppDispatch()
    const tab = useAppSelector((state: any) => state.tabs.currentTab)
    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
            {/* for desktop */}
            <div className='hidden bg-base-300 w-full h-full lg:flex flex-col p-4 py-10 justify-between rounded-r-2xl'>
                {/* name */}
                <h1 className='text-center text-3xl font-bold mx-12'>Kaushik</h1>
                <div className="avatar mx-auto">
                    <div className="w-24 rounded-full border-2 border-primary">
                        <img src="https://i.pinimg.com/originals/21/d0/16/21d016b1ca2a894be50ed09c00338439.jpg" />
                    </div>
                </div>
                {/* tabs */}
                <div className='flex flex-col gap-3'>
                    {
                        tabs.map((item, idx) => (
                            <div className={`btn  ${pathname == item.link ? 'btn-active btn-neutral' : 'btn-outline'}`} onClick={() => {
                                // dispatch(setTab(idx))
                                router.push(item.link)
                            }} key={idx}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
                {/* footer */}
                <div className='w-full p-4 flex text-2xl justify-evenly items-center'>
                    {
                        links.map((item, idx) => {
                            return <Link href={item.link} target='_blank' key={idx}>
                                {item.icon}
                            </Link>
                        })
                    }

                </div>
                {/* dark toggle */}
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="light" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
            {/* for phone */}
            <div className='flex h-full lg:hidden flex-col p-4 py-10 justify-between bg-base-100'>
                {/* name */}
                <h1 className='text-center text-3xl font-bold mx-12 md:mx-28'>Kaushik</h1>

                {/* tabs */}
                <div className='flex flex-col gap-3'>
                    {
                        tabs.map((item, idx) => (
                            <div className={`btn  ${pathname == item.link ? 'btn-active btn-neutral' : 'btn-outline'}`} onClick={() => {
                                // dispatch(setTab(idx))
                                router.push(item.link)
                            }} key={idx}>
                                {item.name}
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
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="light" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </>
    )
}

export default Navbar