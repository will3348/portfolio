import React from 'react';
export default function Navigation() {
  return (
    <div className='navi bg-inherit'>
      <div className="wrapper">
        <ul className='flex justify-end gap-4 pr-8'>
            <li className="home hover:bg-gray-100 rounded-md px-2 "><a href="#hero">Home</a></li>
            <li className="project hover:bg-gray-200 rounded-md px-2"><a href="#work">Projects</a></li>
            <li className="social hover:bg-gray-300 rounded-md px-2"><a href="#cards">Social Media</a></li>
            <li className="contact hover:bg-gray-400 rounded-md px-2"><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </div>
  )
}
