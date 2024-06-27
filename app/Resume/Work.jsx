import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const workData = [
    {
        position: 'React Native Intern',
        company: 'Robolens.ai',
        time: 'May, 2024 - Present',
        location: 'Remote',
        content: [
            'Solely responsible for the design, development, and implementation of a robust Android application for face recognition and detection at Robolens.ai.',
            'Successfully managed the entire application lifecycle, from initial concept through to final deployment, ensuring timely delivery and adherence to high-quality standards.',
        ]
    },
    {
        position: 'Web Developer Intern',
        company: 'Uniford Foundation',
        time: 'February, 2024 - May, 2024',
        location: 'Chandigarh',
        content: [
            'Developed a website from the ground up to assist students worldwide in finding suitable colleges while also addressing their additional needs.',
            'Refined my expertise in Next.js and Firebase, leveraging these technologies to bring the website to life with enhanced functionalities.',
            'Collaborated with a team of 3 web developers to successfully complete this website project.'
        ]
    },

]

function Work() {
    return (
        <div className='my-10 bg-base-300 px-5 py-8 lg:p-10 rounded-xl shadow-xl flex flex-col gap-8'>
            <h1 className='text-3xl font-bold '>Work Experience</h1>

            {/* experience */}
            {
                workData.map((item, idx) => {
                    return <div key={idx} className='w-full border rounded-xl shadow-xl p-5 flex flex-col gap-2 bg-base-100' >
                        <h2 className='text-2xl font-bold'>{item.position}</h2>
                        <p>{item.company} </p>
                        <div className='flex gap-10'>
                            <p>{item.time} </p>
                            <div className='flex items-center gap-1'>
                                <FaLocationDot />
                                <p className='flex'>{item.location} </p>
                            </div>
                        </div>
                        <ul className='px-4'>
                            {
                                item.content.map((itm, id) => {
                                    return <li key={id} className='list-disc'>
                                        {itm}
                                    </li>
                                })
                            }

                            {/* <li className='list-disc'>
                            Refined my expertise in Next.js and Firebase, leveraging these
                            technologies to bring the website to life with enhanced functionalities.
                        </li>
                        <li className='list-disc'>
                            Collaborated with a team of 3 web developers to successfully complete
                            this website project.
                        </li> */}
                        </ul>
                    </div>
                })
            }
        </div>
    )
}

export default Work