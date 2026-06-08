import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function And() {
    const desref = useRef(null);
    
    useEffect(() => {
        gsap.set(desref.current, { y: 20, opacity: 0, scale: 0.8 })
        
        gsap.to(desref.current, {
            y: 0,
            opacity: 0.8,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.4
        })
    }, [])

    return (
        <div className='text-5xl md:text-7xl font-display font-black text-center my-2 select-none'>
            <h1 
                ref={desref} 
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 text-glow-cyan"
            >
                &
            </h1>
        </div>
    )
}
