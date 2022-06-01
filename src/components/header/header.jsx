import React from 'react'
import Navigation from '../navibar/Navigation'
import logo from '../../logo_transparent.png'


export default function header() {
  return (
    <div className='header bg-red-300  fixed top-0  w-full h-16 z-10 '>
      <div className='title '><img src="{logo}" alt="123" /></div>
      <Navigation/>
    </div>
  )
}
