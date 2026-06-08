import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import h from '../pics/h.png'
import '../App.css'

export default function Pic() {
    const [nme] = useState("are you worried for your project?")
    const [but] = useState("let's collaborate")
    const cardRef = useRef(null)
    const imgRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        // Entry animation
        gsap.fromTo([cardRef.current, buttonRef.current], 
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out"
            }
        )
    }, [])

    const handleMouseMove = (e) => {
        const card = cardRef.current
        if (!card) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        // Tilt effect
        gsap.to(card, {
            rotateY: x * 0.15,
            rotateX: -y * 0.15,
            transformPerspective: 600,
            duration: 0.3,
            ease: "power2.out"
        })
    }

    const handleMouseLeave = () => {
        const card = cardRef.current
        if (!card) return

        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
        })
    }

    return (
        <div className='w-full flex justify-center items-center relative z-10 px-6 mt-8 md:mt-12 font-sans'>
            <div className='w-full max-w-5xl flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:gap-8'>
                
                {/* Left Text */}
                <div className='flex-1 text-center md:text-left order-2 md:order-1'>
                    <h2 className='capitalize text-lg md:text-xl font-medium text-zinc-400 tracking-wider mb-2 font-display'>
                        Got a vision?
                    </h2>
                    <h1 className='capitalize text-2xl md:text-3xl font-black text-white leading-snug tracking-tight font-display'>
                        {nme}
                    </h1>
                </div>
                
                {/* Center Image Component with 3D Tilt Effect */}
                <div 
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className='relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 cursor-pointer order-1 md:order-2 flex justify-center items-center rounded-3xl p-1 shadow-2xl transition-all duration-300'
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Spinning Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 rounded-3xl opacity-80 blur-[2px] animate-spin" style={{ animationDuration: '8s' }}></div>
                    
                    {/* Card Body */}
                    <div className="w-full h-full bg-zinc-900 rounded-3xl overflow-hidden flex items-center justify-center relative z-10 border border-zinc-800">
                        <img
                            ref={imgRef}
                            src={h}
                            alt="profile"
                            className='w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105 select-none'
                        />
                    </div>
                </div>
                
                {/* Right Button */}
                <div ref={buttonRef} className='flex-1 flex justify-center md:justify-end order-3'>
                    <a 
                        href="#contact" 
                        className='group relative flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold capitalize text-sm tracking-widest transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/35 hover:-translate-y-1 overflow-hidden'
                    >
                        <span className="relative z-10 font-display">{but}</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-500 ease-out z-0"></div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}
