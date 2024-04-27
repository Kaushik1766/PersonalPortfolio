import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const educationData = [
    {
        time: 'fasd',
        data: 'fadsfa dfasdfasfa dsfaf adsfa dsfadsf asdf asdfasd'
    },
    {
        time: 'fasd',
        data: 'fadsfa dfasdfasfa dsfaf adsfa dsfadsf asdf asdfasd'
    },
]

function Work() {
    return (
        <div className='my-10 bg-base-300 px-5 py-8 lg:p-10 rounded-xl shadow-xl'>
            <h1 className='text-3xl font-bold mb-5 '>Work Experience</h1>

            {/* experience */}
            <div className='w-full border rounded-xl shadow-xl p-5 flex flex-col gap-2 bg-base-100' >
                <h2 className='text-2xl font-bold'>Web Developer Intern</h2>
                <p>Uniford Foundation</p>
                <div className='flex gap-10'>
                    <p>February, 2024 - Present</p>
                    <div className='flex items-center gap-1'>
                        <FaLocationDot />
                        <p className='flex'>Chandigarh</p>
                    </div>
                </div>
                <ul className='px-4'>
                    <li className='list-disc'>
                        Developed a website from the ground up to assist students worldwide in
                        finding suitable colleges while also addressing their additional needs.
                    </li>
                    <li className='list-disc'>
                        Refined my expertise in Next.js and Firebase, leveraging these
                        technologies to bring the website to life with enhanced functionalities.
                    </li>
                    <li className='list-disc'>
                        Collaborated with a team of 3 web developers to successfully complete
                        this website project.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Work