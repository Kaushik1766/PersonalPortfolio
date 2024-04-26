import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'

const linkData = [
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
    {
        link: 'https://twitter.com/kaushiksaha004',
        icon: <FaXTwitter></FaXTwitter>
    },
    {
        link: '',
        icon: <FaDiscord></FaDiscord>
    },
]
function Links() {
    return (
        <>
            {/* what do i do */}
            <div className='w-11/12 mx-auto bg-base-300 my-10 p-10 rounded-xl shadow-xl flex flex-col gap-10'>
                <h1 className='text-4xl font-bold'>Links</h1>
                <div className="flex flex-wrap flex-row p-2 gap-10 w-full justify-evenly items-center text-5xl">

                    {
                        linkData.map((item, idx) => {
                            return <Link href={item.link} key={idx} target='_blank' className='hover:scale-150 duration-150 '>
                                {item.icon}
                            </Link>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Links