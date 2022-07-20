import React from 'react'
import Navigation from '../navibar/Navigation'


export default function header() {
  return (
    <div className='header bg-red-300  fixed top-0  w-full  h-16 z-10 '>
      <div className='title h-10 font-cursive font-extrabold flex items-center lg:text-3xl pt-5 pl-5 sm:text-2xl pt-3 pl-3 xs:text-xl'><span className="hover:animate-bounce"><a href='#hero'>Tengyuan's Portfolio Website</a></span></div>
      <Navigation/>
    </div>
  )
}
