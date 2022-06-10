import React from 'react'
import Cardtemplate from './Cardtemplate'
import cardImg1 from '../../assets/img/myselfpng.png'

export default function cards() {
  return (
    <div className='cards bg-yellow-300 w-full h-[calc(100vh-64px)] snap-start flex justify-center' id='cards'>
      <div className="cardSection w-4/5 lg:flex justify-between items-center xs:grid grid-cols-2 ">
        <Cardtemplate img={cardImg1} title='github' description='456'/>
        <Cardtemplate img={cardImg1} title='facebook' description='456'/>
        <Cardtemplate img={cardImg1} title='ins' description='456'/>
        <Cardtemplate img={cardImg1} title='faniudf' description='456'/>
      </div>
    </div>
  )
}
