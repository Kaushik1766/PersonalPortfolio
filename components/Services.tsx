import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";


const servicesData = [
    {
        title: 'Frontend Development',
        content: 'I can make you a fully responsive and functional website with good UI',
        logo: <FaLaptopCode />
    },
    {
        title: 'React Native Development',
        content: 'I can make you a fully responsive and functional website with good UI',
        logo: <FaMobileAlt />
    },
    {
        title: 'Fullstack Development',
        content: 'I can make you a fully responsive and functional website with good UI',
        logo: <CgWebsite />
    },
]

function Services() {
    return (
        <>
            {/* what do i do */}
            <div className='w-11/12 mx-auto bg-base-300 my-10 p-10 rounded-xl shadow-xl flex flex-col gap-10'>
                <h1 className='text-4xl font-bold'>What do I do?</h1>
                <div className="flex flex-col lg:flex-row p-2 gap-10 w-full justify-evenly items-center">
                    {
                        servicesData.map((item, idx) => {
                            return <div key={idx} className="flex items-center gap-4 w-full">
                                <div className="text-4xl">
                                    {item.logo}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-xl font-bold">{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Services