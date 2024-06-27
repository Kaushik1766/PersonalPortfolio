import React from 'react'
import Skills from './Skills'

function SkillsPage() {
    return (
        <div className='w-11/12 mx-auto my-8 lg:my-10 md:p-10'>
            <h1 className='text-4xl font-bold'>Skills</h1>
            <hr className='mt-2 mb-10 border-base-content' />
            <Skills />
        </div>
    )
}

export default SkillsPage