import React, { useEffect, useRef } from 'react'
import k from '../pics/k.mp4'
import Git from './git'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaHtml5, FaReact, FaJs, FaCss3Alt, FaBolt } from "react-icons/fa"
import { SiPhp, SiMysql, SiCanva, SiJquery, SiTailwindcss } from "react-icons/si"

gsap.registerPlugin(ScrollTrigger)

export default function Baaner() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    // Reveal text and video on scroll
    gsap.fromTo(videoRef.current,
      { opacity: 0, scale: 0.9, x: -50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    const skillCards = containerRef.current.querySelectorAll('.skill-card')
    gsap.fromTo(skillCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  const skills = [
    { name: "React", level: "90%", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Tailwind CSS", level: "95%", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
    { name: "GSAP", level: "80%", icon: <FaBolt className="text-yellow-400 text-3xl" /> },
    { name: "JavaScript", level: "90%", icon: <FaJs className="text-yellow-400 text-3xl animate-pulse" /> },
    { name: "jQuery", level: "85%", icon: <SiJquery className="text-blue-400 text-3xl" /> },
    { name: "PHP", level: "80%", icon: <SiPhp className="text-indigo-400 text-3xl" /> },
    { name: "MySQL", level: "85%", icon: <SiMysql className="text-blue-500 text-3xl" /> },
    { name: "HTML5 & CSS3", level: "95%", icon: <div className="flex gap-1"><FaHtml5 className="text-orange-500 text-2xl" /><FaCss3Alt className="text-blue-500 text-2xl" /></div> },
    { name: "Canva", level: "85%", icon: <SiCanva className="text-cyan-500 text-3xl" /> }
  ]

  return (
    <div id='about' className='w-full min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center max-w-7xl mx-auto'>
      <Git />
      
      <div ref={containerRef} className='flex flex-col lg:flex-row justify-center items-stretch w-full mt-10 lg:mt-16 gap-12 lg:gap-20'>
        {/* Left Side: Video Player */}
        <div ref={videoRef} className='relative w-full lg:w-1/2 flex justify-center items-center'>
          <div className="relative p-1 rounded-3xl overflow-hidden glass shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <video
              className='rounded-[22px] h-72 sm:h-80 md:h-96 w-auto object-cover relative z-10'
              autoPlay
              loop
              muted
              src={k}
            ></video>
          </div>
          <span className='absolute bottom-[-15px] right-[10%] md:right-[15%] text-4xl text-orange-500 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-3 shadow-lg z-20 animate-bounce' style={{ animationDuration: '4s' }}>
            <FaHtml5 />
          </span>
        </div>

        {/* Right Side: Paragraph & Skills Grid */}
        <div className='w-full lg:w-1/2 flex flex-col justify-between gap-8'>
          <div className="space-y-4">
            <p className='text-base sm:text-lg text-zinc-300 leading-relaxed text-justify font-sans'>
              I’m <span className="font-bold text-white font-display">Subham Singh</span>, a BCA student dedicated to building practical, robust tech solutions. My core expertise covers full-stack web development, client-side React architectures, and low-level microprocessor configurations.
            </p>
            <p className='text-base sm:text-lg text-zinc-300 leading-relaxed text-justify font-sans'>
              Rather than studying code in theory, I believe in shipping clean, functional, and scalable systems. I am also diving deep into modern artificial intelligence and machine learning to build next-generation applications.
            </p>
          </div>

          {/* Interactive Skills Progress Grid */}
          <div className="space-y-4 mt-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white font-display">My Skill Matrix</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="skill-card p-4 rounded-2xl glass-light border border-zinc-800/80 hover:border-zinc-700/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                >
                  <div className="p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800/50">
                    {skill.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-zinc-200 truncate">{skill.name}</span>
                      <span className="text-xs font-bold text-blue-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden border border-zinc-900">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}