'use client'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';



function ProgressBar({ level }: { level: number }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(progress => {
                if (progress >= level) {
                    clearInterval(intervalId);
                    return progress;
                }
                return progress + 1
            });
        }, 20);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <progress className="progress w-1/2 duration-500" value={progress} max="100"></progress>
        </>
    )
}

export default ProgressBar