import React from 'react'

export default function cards() {
  return (
    <div className='CardTemplate w-1/5 h-3/4 bg-green-100 rounded-3xl overflow-hidden'>
      <div className="imgWrapper w-full h-2/3 bg-red-100">
        img here
      </div>
      <div className="CardSubtitle w-full h-1/6 bg-blue-100">
        subtitle here
      </div>
      <div className="descrption w-full h-1/6 bg-grey-100">
        description here
      </div>
    </div>
  )
}
