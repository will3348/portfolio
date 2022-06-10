import React from 'react'
import tic from '../../assets/img/ticpic.png'
import psri from '../../assets/img/psri.png'
import grouppic from '../../assets/img/group-project.png'


export default function work(website,bgImg) {
  return (
    <div className='works bg-pink-100 w-full h-[calc(100vh-64px)] snap-start flex justify-center ' id="work">
      <div className="container w-full h-screen bg-yellow-100 flex justify-center items-center">
        <a className="w-4/5 h-5/6" href={website}>
        <div className="slider bg-green-400 w-full h-5/6 rounded-2xl shadow-2xl relative overflow-hidden">
          <img className="absolute " src={tic} alt="" />
          <img className="absolute" src={psri} alt="" />
          <img className="absolute" src={grouppic} alt="" />
        </div>
        </a>
      </div>
    </div>
  )
}
