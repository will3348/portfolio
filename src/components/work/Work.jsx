import React from 'react'
import Workcard from './Workcard'
import tic from '../../assets/img/ticpic.png'
import grouppic from '../../assets/img/group-project.png'


export default function work() {
  return (
    <div className='works bg-pink-100 w-full h-[calc(100vh-64px)] snap-start flex justify-center' id="work">
      <div className="container w-4/5 bg-yellow-100 flex flex-nowrap justify-around items-center">
        <Workcard image={tic} title='TIC TAC TOE' description='Tic Tac Toe game. A web app build with Vue.js including 3 pages. ' link='https://melodious-klepon-61830f.netlify.app/' />
        <Workcard image={grouppic} title='W.E.B' description='A group project build by me and 2 other classmates' link='https://62511829d01d855b08d59bc8--neon-rugelach-f51736.netlify.app/' />
      </div>

    </div>
  )
};
