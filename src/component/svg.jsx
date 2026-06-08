import { useEffect, useRef } from "react"
import { gsap } from 'gsap'

function Newsvg() {
    const strref = useRef(null);
    const pathref = useRef(null);

    useEffect(() => {
        const strel = strref.current;
        const pathel = pathref.current;
        const defaultpath = "M 1 80 Q 700 80 1400 80";
        
        const handleMouseMove = (e) => {
            const rect = strel.getBoundingClientRect();
            // Calculate mouse coordinates relative to the SVG container
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const newpt = `M 1 80 Q ${mouseX} ${mouseY} 1400 80`;
            gsap.to(pathel, {
                duration: 0.4,
                attr: { d: newpt },
                ease: "power2.out"
            })
        };

        const handleMouseLeave = () => {
            gsap.to(pathel, {
                duration: 1.2,
                attr: { d: defaultpath },
                ease: "elastic.out(1, 0.4)",
            });
        };

        strel.addEventListener("mousemove", handleMouseMove);
        strel.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            strel.removeEventListener("mousemove", handleMouseMove);
            strel.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div id="string2" ref={strref} className="w-full relative overflow-hidden py-10 flex justify-center items-center">
            <svg 
                className="w-full bg-transparent max-w-7xl cursor-pointer" 
                height="200" 
                viewBox="0 0 1400 200" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="neon-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <filter id="neon-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                
                <path
                    ref={pathref}
                    d="M 1 80 Q 700 80 1400 80" 
                    stroke="url(#neon-line-grad)" 
                    strokeWidth="3.5"
                    fill="transparent" 
                    filter="url(#neon-glow-filter)"
                    className="transition-shadow duration-300"
                />
            </svg>
        </div>
    );
}

export default Newsvg;