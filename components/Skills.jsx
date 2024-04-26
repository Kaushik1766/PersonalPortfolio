import React from 'react'
import ProgressBar from './ProgressBar'

const skillData = [
    {
        skill: 'NodeJs',
        level: 20,
    },
    {
        skill: 'NodeJs',
        level: 50,
    },
    {
        skill: 'NodeJs',
        level: 60,
    },
    {
        skill: 'NodeJs',
        level: 80,
    },
]

function Skills() {
    return (
        <div className=' mx-auto rounded-xl p-10 shadow-xl bg-base-300'>
            <h1 className='text-3xl font-bold'>Coding Skills</h1>
            <div className='grid grid-cols-2 w-full my-10'>
                {
                    skillData.map((item, idx) => {
                        return <div className='' key={idx}>
                            <h2 className='text-xl font-bold'>{item.skill}</h2>
                            <ProgressBar level={item.level} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills