import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function page() {
    const contact = [
        {
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/kaushiksaha176/'
        },
        {
            icon: <FaGithub />,
            link: 'https://github.com/Kaushik1766/'
        },
        {
            icon: <MdEmail />,
            link: 'mailto:kaushiksaha004@gmail.com'
        },
    ]
    return (
        <div className='w-11/12 mx-auto my-8 lg:my-10 md:p-10' >
            <h1 className='text-4xl font-bold'>Get in touch...</h1>
            <hr className='mt-2 mb-10 border-base-content' />
            <div className='flex flex-wrap items-center justify-center w-full md:h-[60vh] gap-8 py-5'>
                {
                    contact.map((item, idx) => {
                        return <Link target='_blank' key={idx} href={item.link} className='h-32 w-32 md:h-40 md:w-40 text-5xl border flex items-center justify-center rounded-2xl'>
                            {
                                item.icon
                            }
                        </Link>
                    })
                }
            </div>

        </div>
    )
}

export default page