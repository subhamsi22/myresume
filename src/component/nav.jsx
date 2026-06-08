import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import '../App.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
    const fullText = "subham singh";
    const [text, setText] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index >= fullText.length) {
                clearInterval(timer);
            }
        }, 150);
        return () => clearInterval(timer);
    }, []);

    const handleChange = () => {
        gsap.killTweensOf("#dns");
        gsap.fromTo("#dns", 
            { textShadow: "0 0 5px rgba(59, 130, 246, 0.2)" },
            {
                textShadow: "0 0 25px rgba(59, 130, 246, 0.8), 0 0 10px rgba(6, 182, 212, 0.5)",
                duration: 0.8,
                repeat: 1,
                yoyo: true,
                ease: "power2.inOut"
            }
        );
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="w-full fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className='w-full max-w-6xl h-16 glass rounded-full flex items-center justify-between px-6 md:px-10 shadow-lg relative'>
                <h1 
                    id='dns' 
                    onMouseEnter={handleChange} 
                    className='text-xl md:text-2xl dancing-script typing-cursor cursor-default z-50 text-white font-bold select-none tracking-wide text-glow-indigo'
                >
                    {text}
                </h1>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8 z-50'>
                    <li className='relative group'>
                        <a href="#hj" className='text-zinc-300 hover:text-white font-medium uppercase text-sm tracking-wider transition-colors duration-300'>
                            Home
                        </a>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </li>
                    <li className='relative group'>
                        <a href="#about" className='text-zinc-300 hover:text-white font-medium uppercase text-sm tracking-wider transition-colors duration-300'>
                            About Me
                        </a>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </li>
                    <li className='relative group'>
                        <a href="#slider" className='text-zinc-300 hover:text-white font-medium uppercase text-sm tracking-wider transition-colors duration-300'>
                            Projects
                        </a>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            className='font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-2.5 uppercase text-xs tracking-wider rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-[1px]'
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <div className='md:hidden z-50 text-xl cursor-pointer text-zinc-300 hover:text-white transition-colors' onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed inset-0 w-full h-screen bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-40`}>
                    <ul className='flex flex-col items-center gap-8 text-lg'>
                        <li className='hover:text-blue-400 text-zinc-200 transition-colors cursor-pointer font-bold uppercase tracking-widest' onClick={toggleMenu}>
                            <a href="#hj">Home</a>
                        </li>
                        <li className='hover:text-blue-400 text-zinc-200 transition-colors cursor-pointer font-bold uppercase tracking-widest' onClick={toggleMenu}>
                            <a href="#about">About Me</a>
                        </li>
                        <li className='hover:text-blue-400 text-zinc-200 transition-colors cursor-pointer font-bold uppercase tracking-widest' onClick={toggleMenu}>
                            <a href="#slider">Projects</a>
                        </li>
                        <li className='mt-4' onClick={toggleMenu}>
                            <a href="#contact" className='bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3.5 uppercase font-bold text-sm tracking-widest rounded-full shadow-lg shadow-blue-500/20'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
