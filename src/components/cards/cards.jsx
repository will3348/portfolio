import React from 'react'
import Cardtemplate from './Cardtemplate'
export default function cards() {
  return (
    <div className='cards bg-yellow-300 w-full h-[calc(100vh-64px)] snap-start flex flex-wrap justify-center gap-10 items-center ' id='cards'>
      <Cardtemplate />
      <Cardtemplate />
      <Cardtemplate />
    </div>
  )
}
