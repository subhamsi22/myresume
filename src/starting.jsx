import React, { useEffect, useRef } from 'react'
import Nav from './component/nav'
import King from './component/king'
import MainText from './component/main_text'
import And from './component/and'
import Pic from './component/pic'
import { FaReact } from "react-icons/fa"
import { GiLongLeggedSpider, GiSpiderWeb } from "react-icons/gi"
import { IoLogoHtml5 } from "react-icons/io"
import gsap from 'gsap'
import './App.css'

export default function Starting() {
    const opref = useRef(null)
    const hhref = useRef(null)
    const opreff = useRef(null)
    const moveRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        // Cursor movement with smooth GSAP lag
        const handleMouseMove = (e) => {
            if (window.innerWidth >= 768 && moveRef.current) {
                gsap.to(moveRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.4,
                    ease: "power2.out"
                })
            }
        }

        const handleMouseEnter = () => {
            if (window.innerWidth >= 768 && moveRef.current) {
                gsap.to(moveRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3
                })
            }
        }

        const handleMouseLeave = () => {
            if (moveRef.current) {
                gsap.to(moveRef.current, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.3
                })
            }
        }

        // Set initial state of cursor
        if (moveRef.current) {
            gsap.set(moveRef.current, { x: window.innerWidth / 2, y: window.innerHeight / 2, opacity: 0, scale: 0 })
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener("mousemove", handleMouseMove)
            container.addEventListener("mouseenter", handleMouseEnter)
            container.addEventListener("mouseleave", handleMouseLeave)
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove)
                container.removeEventListener("mouseenter", handleMouseEnter)
                container.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [])

    useEffect(() => {
        // Entry animations
        gsap.set(opref.current, { opacity: 0, scale: 0.5, y: 30 })
        gsap.to(opref.current, {
            y: 0,
            opacity: 0.7,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: 0.5
        })

        gsap.set(opreff.current, { opacity: 0, scale: 0.5, y: 30 })
        gsap.to(opreff.current, {
            y: 0,
            opacity: 0.7,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: 0.7
        })

        // Floating hover loop animation for spider
        gsap.to(opref.current, {
            y: "-=15",
            rotation: 5,
            repeat: -1,
            yoyo: true,
            duration: 2.5,
            ease: "sine.inOut"
        })

        // HTML5 logo spin-pulse
        gsap.to(opreff.current, {
            y: "+=12",
            rotation: -5,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut"
        })

        // Rotating spider web
        gsap.to(hhref.current, {
            rotate: 360,
            repeat: -1,
            ease: "linear",
            duration: 15,
        })
    }, [])

    return (
        <div id="hj" ref={containerRef} className='overflow-hidden relative min-h-screen bg-zinc-950 flex flex-col justify-center radial-grid pt-24 md:pt-28 pb-16'>
            {/* Custom Interactive Follower */}
            <span 
                id="move" 
                ref={moveRef} 
                className="hidden md:flex text-blue-400/30 text-4xl pointer-events-none drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
            >
                <FaReact className="animate-spin-slow" style={{ animationDuration: '8s' }} />
            </span>

            {/* Glowing Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 radial-glow rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 radial-glow-cyan rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <Nav />

            <div className="w-full relative z-10 flex flex-col items-center select-none">
                <King />
                
                <MainText displayText="web designer" />
                
                <span 
                    ref={opref} 
                    className='text-7xl absolute right-[10%] md:right-[20%] top-[30%] text-indigo-500/80 hover:text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-110 cursor-pointer hidden sm:inline-block' 
                    id="move2"
                >
                    <GiLongLeggedSpider />
                </span>
                
                <And />
                
                <span 
                    ref={opreff} 
                    className='text-7xl absolute left-[10%] md:left-[20%] top-[55%] text-amber-500/80 hover:text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-110 cursor-pointer hidden sm:inline-block' 
                    id="move2"
                >
                    <IoLogoHtml5 />
                </span>
                
                <MainText
                    displayText={[
                        "w", "e", "b", " ",
                        "D", "E", "V", "e", "L", 
                        <span key="icon" ref={hhref} className="inline-block mx-1 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                            <GiSpiderWeb />
                        </span>, 
                        "p", "e", "r"
                    ]}
                />
                
                <Pic />
            </div>
        </div>
    )
}
