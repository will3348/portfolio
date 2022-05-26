import React from 'react'

export default function hero() {
  return (
    <div className='heroSection bg-gray-300 w-full h-[calc(100vh-64px)] snap-start sm:flex flex-col md:grid grid-cols-3' id='hero'>
      <div className="right bg-yellow-100  md:col-span-2">
          <div className="hero-image-wrapper flex justify-center sm: md:relative top-32">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg" alt="" />
          </div>
      </div>
      <div className="left text-center self-center md:col-span-1 ">
        <h1 className='hero-title xs:text-2xl py-3 sm:text-3xl py-4 md:text-6xl pb-10'>Will Tengyuan Li</h1>
        <h2 className="hero-subtitle xs:text-xl sm:text-2xl pb-3 md:text-3xl pb-10">Entry Level Web Developer</h2>
        <p className="hero-description xs:text-md sm:text-lg pb-3 md:text-xl pb-10">Yesterday a mechanic. Today a developer. Love HTML, CSS, Javascript.</p>
      </div>
    </div>
  )
}
