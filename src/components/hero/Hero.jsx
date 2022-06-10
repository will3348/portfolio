import React from 'react'
import myImage from '../../myself.jpg'

export default function hero() {
  return (
    <div className='heroSection bg-gray-300 w-full h-[calc(100vh-64px)] snap-start xs:flex flex-col md:grid grid-cols-3' id='hero'>
      <div className="right bg-yellow-100 overflow-hidden md:col-span-2 flex justify-center items-center">
          <div className="hero-image-wrapper  overflow-hidden flex justify-center">
            <img src={myImage} alt="" />
          </div>
      </div>
      <div className="left text-center self-center md:col-span-1">
        <h1 className='hero-title xs:text-2xl pb-0 sm:text-2xl py-3 md:text-6xl pb-10'>Will Tengyuan Li</h1>
        <h2 className="hero-subtitle xs:text-lg pb-0 sm:text-xl pb-2 md:text-3xl pb-10">Entry Level Web Developer</h2>
        <p className="hero-description xs:text-sm pb-5 sm:text-xs pb-2 md:text-xl pb-10">Yesterday a mechanic.Today a developer. Love HTML, CSS,JavaScript.</p>
      </div>
    </div>
  )
}
