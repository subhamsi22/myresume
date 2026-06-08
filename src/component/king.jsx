import React, { useEffect, useRef } from 'react'
import { FaCrown } from "react-icons/fa"
import gsap from 'gsap'

const King = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        gsap.set(containerRef.current, { opacity: 0, y: -20 })
        gsap.to(containerRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3
        })
    }, [])

    return (
        <div className='w-full mt-4 px-4 font-display'>
            <div 
                ref={containerRef} 
                className='text-center flex flex-col items-center justify-center gap-2 md:gap-3 select-none'
            >
                <p className='text-lg md:text-xl font-semibold tracking-widest text-blue-400 uppercase drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]'>
                    Welcome to my space
                </p>
                <h1 className='flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3'>
                    <span className='text-3xl sm:text-4xl md:text-5xl font-light text-zinc-300'>Hi, I'm</span>
                    <span className='flex items-center gap-2 md:gap-3'>
                        <span className='text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 text-glow-indigo'>
                            subham singh
                        </span>
                        <FaCrown className='text-3xl sm:text-4xl md:text-5xl text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-bounce' style={{ animationDuration: '3s' }} />
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default King
