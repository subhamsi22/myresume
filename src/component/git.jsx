import React from 'react'
import fg from '../pics/fg.pdf'

export default function Git() {
    function download() {
        var a = document.createElement("a")
        a.href = fg;
        a.download = "subham_cv.pdf";
        a.click()
    }
    return (
        <div className='flex justify-between items-center py-6 w-full border-b border-zinc-900 select-none'>
            <h1 
                className='capitalize text-3xl md:text-4xl font-display font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400'
            >
                About Me
            </h1>
            <button 
                onClick={download} 
                className='font-semibold font-display bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white cursor-pointer px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm tracking-wider rounded-full uppercase transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-[1px]'
            >
                Download CV
            </button>
        </div>
    )
}
