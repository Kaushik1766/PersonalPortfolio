import React from 'react'
import Project from './Project'
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiFirebase, SiNextdotjs, SiPostgresql, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const projects = [
    {
        title: 'DeepKunj Samiti',
        description: 'Developed this website for a local community, which helped them to increase their donation collection by online means, by around 20%.',
        link: 'https://deepkunjsamiti.in',
        type: 'Freelance',
        techstack: [
            {
                name: 'HTML5',
                icon: <FaHtml5 />
            },
            {
                name: 'CSS',
                icon: <FaCss3 />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            },
            {
                name: 'Javascript',
                icon: <FaJs />
            },
        ]
    },
    {
        title: 'BlogSpot',
        description: 'Realtime blogging application, with implementation of proper authentication (with hashing and salting for passwords), browser cookies for persistent sessions',
        link: 'https://github.com/Kaushik1766/BlogSpot',
        type: 'Personal',
        techstack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'Express',
                icon: <SiExpress />
            },
            {
                name: 'Postgres',
                icon: <SiPostgresql />
            },
            {
                name: 'Redux',
                icon: <SiRedux />
            },
            {
                name: 'HTML5',
                icon: <FaHtml5 />
            },
            {
                name: 'CSS',
                icon: <FaCss3 />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            },
            {
                name: 'Javascript',
                icon: <FaJs />
            },
        ]
    },
    {
        title: 'Android Calculator',
        description: 'Developed a simple, handy and intuitive calculator mobile app. This project demonstrates basic arithmetic operations such as addition, subtraction, multiplication, and division. The user-friendly interface ensures ease of use for performing quick calculations.',
        link: 'https://github.com/Kaushik1766/Calculator',
        type: 'Personal',
        techstack: [
            {
                name: 'React Native',
                icon: <TbBrandReactNative />
            },
            {
                name: 'Redux',
                icon: <SiRedux />
            },
            {
                name: 'Javascript',
                icon: <FaJs />
            },
        ]
    },
    {
        title: 'Gold Rush',
        description: 'Developed an intuitive and comprehensive full-stack website for a client to promote and sell his online course subscriptions. This site also features a casino and a proper authentication system.',
        link: 'https://gold-rush-green.vercel.app/',
        type: 'Freelance',
        techstack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'NextJs',
                icon: <SiNextdotjs />
            },
            {
                name: 'Javascript',
                icon: <FaJs />
            },
            {
                name: 'Tailwind',
                icon: <SiTailwindcss />
            },
            {
                name: 'HTML5',
                icon: <FaHtml5 />
            },
            {
                name: 'CSS',
                icon: <FaCss3 />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            },
            {
                name: 'Firebase',
                icon: <SiFirebase />
            },
        ]
    },
]
function page() {
    return (
        <div className='w-11/12 mx-auto my-8 lg:my-10 md:p-10'>
            <h1 className='text-4xl font-bold'>Projects</h1>
            <hr className='mt-2 mb-10 border-base-content' />
            {/* <Skills /> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    projects.map((item, idx) => {
                        return <Project project={item} key={idx} />
                    })
                }
            </div>
        </div>
    )
}

export type ProjectType = typeof projects[0]
export default page