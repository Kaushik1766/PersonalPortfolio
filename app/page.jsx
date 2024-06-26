'use client'
import React, { useEffect, useState } from 'react'
// import pfp from '@/public/resumePfp.jpg'
import Services from '@/components/Services'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
// import { FaPhoneSquareAlt } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';
import Links from '@/components/Links';
// import { usePathname } from 'next/navigation';



function About() {
  // const pathname = usePathname()
  const [host, setHost] = useState('')
  useEffect(() => {
    setHost(window.location.href)
  }, [])
  const myInfo = [
    {
      category: 'Location',
      icon: <FaLocationDot />,
      content: 'Chandigarh University, Punjab'
    },
    {
      category: 'Email',
      icon: <MdEmail />,
      content: 'kaushiksaha004@gmail.com'
    },
    // {
    //   category: 'Phone',
    //   icon: <FaPhoneSquareAlt />,
    //   content: ''
    // },
    {
      category: 'Website',
      icon: <BsGlobe2 />,
      content: host
    },
  ]
  return (
    <div className=''>

      {/* window with hero */}
      <div className="mockup-window border bg-base-300 w-11/12 mx-auto my-10 lg:my-20 shadow-2xl">
        <div className='p-3 bg-base-100'>
          {/* card */}
          <div className='flex flex-col lg:flex-row rounded-xl overflow-hidden w-full gap-4'>
            <div className='w-full lg:w-2/5'>
              <img src="https://i.pinimg.com/originals/21/d0/16/21d016b1ca2a894be50ed09c00338439.jpg" alt="" className='mx-auto rounded-xl' />
            </div>
            <div className='w-full lg:w-3/5 flex flex-col gap-4 justify-evenly p-4 text-center lg:text-left'>
              <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>Kaushik Saha</h1>
                <p>I am a B.E. CSE student and a Full Stack Web Developer with over a year of experience in React, Express, PostgreSQL, and Node.js. I specialize in building modern, scalable websites using technologies like Next.js, with a strong focus on creating seamless and efficient user experiences.</p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-4 w-full text-left'>
                {
                  myInfo.map((item, idx) => {
                    return <div className='flex gap-3 items-center' key={idx}>
                      <div className='text-2xl'>
                        {item.icon}
                      </div>
                      <div>
                        <h1 className='font-bold'>{item.category}:</h1>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Links />
    </div>
  )
}

export default About