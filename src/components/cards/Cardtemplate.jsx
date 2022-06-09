import React from 'react'

export default function cards(props) {
  return (
    <div className='CardTemplate w-1/5 h-3/4 bg-green-100 rounded-3xl overflow-hidden shadow-2xl'>
      <div className="imgWrapper w-full h-2/3 bg-red-100">
        {props.img}
      </div>
      <div className="CardSubtitle w-full h-1/6 bg-blue-100">
        {props.title}
      </div>
      <div className="descrption w-full h-1/6 bg-grey-100">
        {props.description}
      </div>
    </div>
  )
}