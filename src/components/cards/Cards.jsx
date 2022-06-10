import React from 'react'
import Cardtemplate from './Cardtemplate'
export default function cards() {
  return (
    <div className='cards bg-yellow-300 w-full h-[calc(100vh-64px)] snap-start flex justify-center' id='cards'>
      <div className="cardSection w-4/5 lg:flex justify-between items-center xs:grid grid-cols-2 ">
        <Cardtemplate title='github'/>
        <Cardtemplate title='facebook'/>
        <Cardtemplate title='ins'/>
        <Cardtemplate title='faniudf'/>
      </div>
    </div>
  )
}
