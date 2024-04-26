import React from 'react'
import Education from './Education'
import Work from './Work'
import Skills from './Skills'

function Resume() {
    return (
        <>
            <div className='w-11/12 mx-auto my-8 lg:my-16 md:p-10 '>
                <h1 className='text-4xl font-bold'>Resume</h1>
                <hr className='mt-2 border-base-content' />
                <div className='w-full flex justify-end pt-2 mb-8'>
                    <p>1+ year of experience</p>
                </div>
                <Skills />
                <Education />
                <Work />
            </div>
        </>
    )
}

export default Resume