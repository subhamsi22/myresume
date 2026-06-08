import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const MainText = ({ displayText }) => {
  const textRef = useRef(null)

  useEffect(() => {
    if (!displayText) return;
    const chars = textRef.current.querySelectorAll('.char')

    // Set initial state to avoid flicker
    gsap.set(chars, { opacity: 0, y: 30, scale: 0.9 })

    gsap.to(chars, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: "out",
      delay: 0.2
    })
  }, [displayText])

  return (
    <div className='w-full min-h-[60px] flex justify-center items-center py-4 sm:py-6 md:py-8 px-4 font-display'>
      <h1
        ref={textRef}
        className='text-zinc-200 hover:text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-black uppercase tracking-widest flex flex-wrap justify-center select-none cursor-default transition-all duration-500 hover:tracking-[0.15em]'
      >
        {(Array.isArray(displayText) ? displayText : displayText.split("")).map((char, index) => (
          <span
            key={index}
            className="char inline-block"
            style={{ whiteSpace: "pre" }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  )
}

export default MainText
