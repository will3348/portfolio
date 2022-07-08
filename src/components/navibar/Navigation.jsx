import React from 'react';
export default function Navigation() {
  return (
    <div className='navi bg-inherit'>
      <div className="wrapper">
        <ul className='flex justify-end lg:gap-4 pr-8 xs:gap-2 pr-4'>
            <li className="home hover:bg-gray-100 rounded-md px-2 "><a href="#hero">Home</a></li>
            <li className="social hover:bg-gray-300 rounded-md px-2"><a href="#cards">Skills</a></li>
            <li className="project hover:bg-gray-200 rounded-md px-2"><a href="#work">Projects</a></li>
            <li className="contact hover:bg-gray-400 rounded-md px-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
