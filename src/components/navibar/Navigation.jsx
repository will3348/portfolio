import React from 'react';
export default function Navigation() {
  return (
    <div className='navi bg-inherit'>
      <div className="wrapper">
        <ul className='flex justify-end gap-4 pr-8'>
            <li><a href="#hero">herosection</a></li>
            <li><a href="#work">works</a></li>
            <li><a href="#cards">cards</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    </div>
  )
}
