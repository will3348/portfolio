import React from 'react'
import Navigation from '../navibar/Navigation'


export default function header() {
  return (
    <div className='header bg-red-300  fixed top-0  w-full h-16 z-10 '>
      <h1 className='title '>My Name Is Tengyuan Li</h1>
      <Navigation/>
    </div>
  )
}
