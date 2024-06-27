import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import { FaJava, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiBootstrap, SiCplusplus, SiCss3, SiExpress, SiFirebase, SiGit, SiHtml5, SiNextdotjs, SiPostgresql, SiPython, SiRedux, SiTailwindcss, SiVite } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const skillData = [
    {
        icon: <FaNodeJs />,
        skill: 'NodeJs',
        level: 80,
    },
    {
        icon: <FaReact />,
        skill: 'React',
        level: 80,
    },
    {
        icon: <SiExpress />,
        skill: 'ExpressJs',
        level: 75,
    },
    {
        icon: <SiNextdotjs />,
        skill: 'NextJs',
        level: 70,
    },
    {
        icon: <SiRedux />,
        skill: 'Redux',
        level: 75,
    },
    {
        icon: <SiPostgresql />,
        skill: 'PostgreSQL',
        level: 80,
    },
    {
        icon: <SiHtml5 />,
        skill: 'HTML5',
        level: 90,
    },
    {
        icon: <SiCss3 />,
        skill: 'CSS3',
        level: 80,
    },
    {
        icon: <SiTailwindcss />,
        skill: 'Tailwind',
        level: 85,
    },
    {
        icon: <SiBootstrap></SiBootstrap>,
        skill: 'Bootstrap',
        level: 90,
    },
    {
        icon: <SiGit></SiGit>,
        skill: 'Git/Github',
        level: 90,
    },
    {
        icon: <TbBrandReactNative></TbBrandReactNative>,
        skill: 'React Native',
        level: 80,
    },
    {
        icon: <SiVite></SiVite>,
        skill: 'Vite',
        level: 80,
    },
    {
        icon: <SiFirebase></SiFirebase>,
        skill: 'Firebase',
        level: 80,
    },
    {
        icon: <SiPython></SiPython>,
        skill: 'Python',
        level: 60,
    },
    {
        icon: <SiCplusplus></SiCplusplus>,
        skill: 'C++',
        level: 60,
    },
    {
        icon: <FaJava></FaJava>,
        skill: 'Java',
        level: 60,
    },
]

function Skills() {
    return (
        <div className=' mx-auto rounded-xl p-10 shadow-xl bg-base-300'>
            <h1 className='text-3xl font-bold'>Coding Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full my-10 gap-y-6 items-center justify-center md:gap-x-10 lg:gap-x-0'>
                {
                    skillData.map((item, idx) => {
                        return <div className='' key={idx}>
                            <div className='flex items-center gap-2'>
                                <div className='text-2xl'>
                                    {item.icon}
                                </div>
                                <h2 className='text-xl font-bold'>{item.skill}</h2>
                            </div>
                            <ProgressBar level={item.level} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills