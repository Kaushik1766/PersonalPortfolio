// 'use client'
import Link from "next/link"
import type { ProjectType } from "./page"

function Project({ project }: {
    project: ProjectType
}) {
    return (
        <div className="mockup-browser bg-base-300 border shadow-lg">
            <div className="mockup-browser-toolbar">
                <Link className="input cursor-pointer border border-base-content/40" href={project.link} target="_blank">{project.link}</Link>
            </div>
            <div className="bg-base-200 flex flex-col gap-4 items-center px-6 py-6 h-full">
                <h2 className="text-2xl w-full">{project.title} <span className="text-xs">{`(${project.type})`}</span></h2>
                <p className="w-full">
                    {project.description}
                </p>
                <div className="w-full flex flex-col gap-1">
                    <hr className="w-full border border-base-content" />
                </div>
                <div className="grid grid-cols-3 w-full gap-2">
                    {
                        project.techstack.map((item, idx) => {
                            return <div className="flex gap-2 items-center" key={idx}>
                                {item.icon}
                                <p>
                                    {item.name}
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Project