import React from 'react'

export default function work() {
  return (
    <div className='works bg-pink-100 w-full h-[calc(100vh-64px)] snap-start flex justify-center ' id="work">
      <div className="container flex justify-center">
        <div className="slider bg-green-400 h-4/5 w-3/5 relative top-14 rounded-2xl flex justify-center overflow-hidden">
          <div className="left h-full flex justify-center basis-1/4 bg-red-400">
              left
          </div>
          <div className="right h-full flex  justify-center  basis-3/4 bg-yellow-100">
              right 
          </div>
        </div>
      </div>
      
    </div>
  )
}
