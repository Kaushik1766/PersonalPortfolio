import React from 'react'

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

function Education() {
    return (
        <div className='my-10 bg-base-300 px-5 py-8 lg:p-10 rounded-xl shadow-xl'>
            <h1 className='text-3xl font-bold mb-5 '>Education</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start timeline-box md:text-end mb-10 p-5 shadow-xl">
                        <time className="font-mono italic">2019-2020</time>
                        <div className="text-lg font-black">St. Paul&apos;s College</div>
                        I completed my matriculation at St. Paul's College in Lucknow, studying under the ICSE Board from 2019 to 2020. During this time, I gained a solid academic foundation, honed my skills, and built strong relationships with my classmates and teachers. My experience at St. Paul's College was both enriching and transformative, setting the stage for my future growth and success.

                    </div>
                    <hr className='!border-4 border-base-content' />
                </li>
                <li>
                    <hr className='!border-4 border-base-content' />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10 timeline-box p-5 shadow-xl">
                        <time className="font-mono italic">2020-2022</time>
                        <div className="text-lg font-black">Mary Gardiners Convent School</div>
                        I completed my intermediate education at Mary Gardiners Convent School in Lucknow, studying under the CBSE Board from 2020 to 2022. During this period, I gained a deeper understanding of advanced subjects and developed important skills. The school's supportive environment and comprehensive curriculum played a key role in my academic and personal growth, laying a strong foundation for my future goals.
                    </div>
                    <hr className='!border-4 border-base-content' />
                </li>
                <li>
                    <hr className='!border-4 border-base-content' />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 timeline-box p-5 shadow-xl">
                        <time className="font-mono italic">2022-Present</time>
                        <div className="text-lg font-black">Chandigarh University</div>
                        I'm currently studying for my Bachelor's in Computer Science and Engineering at Chandigarh University in Punjab. The program covers a broad range of topics, from coding and algorithms to AI and machine learning. Chandigarh University offers a dynamic environment with modern facilities and experienced faculty. As I progress through my studies, I'm gaining the skills and expertise needed to succeed in the tech industry, and I'm eager to explore the opportunities ahead.
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Education