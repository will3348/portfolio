import React from 'react'

export default function cards(props) {
  return (
    <div className='CardTemplate lg:w-1/5 h-3/4 bg-green-100 rounded-3xl overflow-hidden shadow-2xl xs:w-5/6'>
      <div className="imgWrapper w-full h-2/3 bg-red-100 flex justify-center items-center overflow-hidden">
        <img  className="xl:w-auto lg:w-2/3 xs:w-1/3" src={props.image} alt="" />
      </div>
      <div className="CardSubtitle w-full h-1/6 bg-blue-100 flex justify-center items-center lg:text-base xs:text-xs">
        {props.title}
      </div>
      <div className="descrption w-full h-1/6 bg-gray-100 flex justify-center p-1 items-center lg:text-base xs:text-xs">
        {props.description}
      </div>
    </div>
  )
}
