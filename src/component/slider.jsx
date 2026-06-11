import React, { useState, useEffect } from 'react';
import tubeviews from "../pics/tubeviews.png"
import digitel from "../pics/digitel.png"
import pixels from "../pics/pixels.png"
import karopitch from "../pics/karopitch.png"
import seotool from "../pics/seotool.png"
import { FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaVideo, FaCalculator, FaShoppingBag, FaSearch, FaRocket, FaShieldAlt } from 'react-icons/fa';

const slideData = [
    {
        id: 1,
        title: "Pixels",
        description: "A compliance SaaS platform simplifying regulatory filings for independent research analysts and firms. Features end-to-end compliance support, pricing tiers, and a professional consulting interface.",
        image: pixels,
        link: "https://pixels-topaz.vercel.app/",
        tags: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
        gradient: "from-blue-500/20 to-sky-500/20",
        icon: <FaShieldAlt className="text-blue-400 text-6xl" />
    },
    {
        id: 2,
        title: "Karo Pitch",
        description: "A startup pitch platform connecting founders from Tier-2 and Tier-3 cities across India with top investors. Features founder stories, investor matching, and a streamlined application pipeline.",
        image: karopitch,
        link: "https://karo-pitch-project-weld.vercel.app/",
        tags: ["React", "Tailwind CSS", "GSAP", "Vite"],
        gradient: "from-amber-500/20 to-orange-500/20",
        icon: <FaRocket className="text-amber-400 text-6xl" />
    },
    {
        id: 3,
        title: "SEO Link Streamer Pro",
        description: "An SEO automation tool that increases your Google search ranking by streaming targeted link visits. Configure loops, delays, and track real-time progress to push your website to the top of search results.",
        image: seotool,
        link: "#",
        tags: ["JavaScript", "Chrome API", "SEO", "Automation"],
        gradient: "from-cyan-500/20 to-indigo-500/20",
        icon: <FaSearch className="text-cyan-400 text-6xl" />
    },
    {
        id: 4,
        title: "TubeViews",
        description: "An analytics tool helping content creators track key metrics, forecast performance, and optimize channel growth strategies.",
        image: tubeviews,
        link: "https://tubeviews.netlify.app/",
        tags: ["React", "Tailwind CSS", "ChartJS", "YouTube API"],
        gradient: "from-red-500/20 to-purple-500/20",
        icon: <FaVideo className="text-red-500 text-6xl" />
    },
    {
        id: 5,
        title: "School Management System",
        description: "An enterprise-grade administration suite for educational institutions, handling student records, faculty allocation, scheduling, and invoicing.",
        link: "#",
        tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        gradient: "from-blue-500/20 to-cyan-500/20",
        icon: <FaDatabase className="text-blue-400 text-6xl animate-pulse" />
    },
    {
        id: 6,
        title: "Digitel Risk",
        description: "A comprehensive digital risk management and tracking suite mapping threat profiles, uptime metrics, and vulnerability audits.",
        image: digitel,
        link: "https://digitel-risk.vercel.app/",
        tags: ["React", "ChartJS", "Tailwind CSS", "React Router"],
        gradient: "from-emerald-500/20 to-teal-500/20",
        icon: <FaServer className="text-emerald-400 text-6xl" />
    },
    {
        id: 7,
        title: "Auto Youtube Video Uploader",
        description: "A secure automation script syncing local video assets with YouTube using cron scheduling, OAuth2 verification, and customizable metadata templates.",
        link: "#",
        tags: ["Python", "OAuth2", "YouTube Data API", "Cron Jobs"],
        gradient: "from-yellow-500/20 to-orange-500/20",
        icon: <FaCode className="text-amber-400 text-6xl" />
    },
    {
        id: 8,
        title: "Trust Point Tax Solution",
        description: "A modern corporate landing page and portal calculation utility for corporate taxation compliance, tax mapping, and client consulting files.",
        link: "#",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        gradient: "from-violet-500/20 to-indigo-500/20",
        icon: <FaCalculator className="text-violet-400 text-6xl" />
    },
    {
        id: 9,
        title: "Myntra Clone",
        description: "A highly responsive e-commerce web application recreating the core user flows of Myntra, featuring filters, cart states, and simulated checkouts.",
        link: "#",
        tags: ["React", "Redux Toolkit", "Node.js", "Tailwind CSS"],
        gradient: "from-pink-500/20 to-rose-500/20",
        icon: <FaShoppingBag className="text-pink-400 text-6xl" />
    }
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
    };

    useEffect(() => {
        if (isHovered) return;

        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds for slower, premium reading time

        return () => clearInterval(intervalId);
    }, [currentIndex, isHovered]);

    return (
        <div id='slider' className='w-full py-20 bg-zinc-950/40 relative font-sans flex flex-col justify-center items-center'>
            {/* Header */}
            <div className="text-center mb-12 px-4 select-none">
                <span className="text-xs font-bold tracking-widest text-blue-500 uppercase px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                    Portfolio
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                    Featured Projects
                </h2>
                <p className="text-zinc-400 max-w-lg mx-auto mt-2 text-sm md:text-base">
                    A curated selection of solutions, applications, and experiments.
                </p>
            </div>

            {/* Slider Main Container */}
            <div
                className="relative w-full max-w-6xl px-4 md:px-12 flex items-center justify-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className='absolute left-1 md:left-2 z-20 p-3 rounded-full glass hover:bg-zinc-800/80 text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer duration-300'
                    aria-label="Previous project"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Slides Box */}
                <div className="overflow-hidden w-full relative h-[500px] md:h-[450px] rounded-[32px] glass shadow-2xl border border-zinc-800/50">
                    <div
                        className="flex h-full transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slideData.map((slide, index) => (
                          <div 
                            key={slide.id} 
                            className="min-w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 relative overflow-hidden"
                          >
                            {/* Colorful Glow Backgrounds */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-20 z-0`}></div>
                            <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br ${slide.gradient} rounded-full blur-[120px] opacity-30`}></div>
                            <div className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr ${slide.gradient} rounded-full blur-[120px] opacity-30`}></div>

                            {/* Left Side: Text Details */}
                            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start text-left order-2 md:order-1 mt-6 md:mt-0 pr-0 md:pr-8 select-none">
                              <span className="inline-block py-1 px-3.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                                  Project 0{index + 1}
                              </span>
                              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight font-display">
                                  {slide.title}
                              </h3>
                              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-6 max-w-md font-sans">
                                  {slide.description}
                              </p>
                              
                              {/* Tech Stack Chips */}
                              <div className="flex flex-wrap gap-2 mb-6">
                                  {slide.tags.map((tag, i) => (
                                      <span key={i} className="text-[10px] md:text-xs font-semibold px-2.5 py-1 bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-300 font-sans">
                                          {tag}
                                      </span>
                                  ))}
                              </div>

                              <a 
                                  href={slide.link} 
                                  target={slide.link !== "#" ? "_blank" : undefined}
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-display text-xs uppercase tracking-wider"
                              >
                                  <span>View Project</span>
                                  <FaExternalLinkAlt className="text-[10px]" />
                              </a>
                            </div>

                            {/* Right Side: Graphic Panel */}
                            <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center order-1 md:order-2">
                                {slide.image ? (
                                    /* Sleek screenshot container with skew overlay */
                                    <div className="w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/85 bg-zinc-950/50 p-2 hover:scale-[1.02] duration-300">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-auto rounded-lg object-cover"
                                        />
                                    </div>
                                ) : (
                                    /* Creative abstract vector frame for missing screenshots */
                                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl glass-light border border-zinc-800/80 flex flex-col items-center justify-center p-6 relative group/card hover:scale-105 duration-300">
                                        <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800 flex items-center justify-center shadow-lg mb-4">
                                            {slide.icon}
                                        </div>
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                            System Module
                                        </span>
                                    </div>
                                )}
                            </div>
                          </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className='absolute right-1 md:right-2 z-20 p-3 rounded-full glass hover:bg-zinc-800/80 text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer duration-300'
                    aria-label="Next project"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2.5 mt-8 select-none">
                {slideData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                            currentIndex === index
                                ? 'w-8 h-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                                : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
