import React from 'react'
import Navigation from '../navibar/Navigation'


export default function header() {
  return (
    <div className='header bg-red-300  fixed top-0  w-full  h-16 z-10 '>
      <div className='title h-10 font-cursive font-extrabold text-3xl pt-5 pl-5 flex items-center '><span className="hover:animate-bounce"><a href='#hero'>Tengyuan's Portfolio Website</a></span></div>
      <Navigation/>
    </div>
  )
}
