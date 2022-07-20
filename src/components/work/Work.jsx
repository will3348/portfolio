import React from 'react'
import Workcard from './Workcard'
import tic from '../../assets/img/ticpic.png'
import grouppic from '../../assets/img/group-project.png'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Work() {
  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState({
    currentImg: tic,
    currentTitle: 'Tic Tac Toe',
    currentDescription: 'Tic Tac Toe game. A web app build with Vue.js including 3 pages.',
    currentLink: 'https://melodious-klepon-61830f.netlify.app/'
  })
  function currentPage() {
    if (page === 1) {
      setCurrent({
        currentImg: tic,
        currentTitle: 'Tic Tac Toe',
        currentDescription: 'Tic Tac Toe game. A web app build with Vue.js including 3 pages.',
        currentLink: 'https://melodious-klepon-61830f.netlify.app/'
      })
    } else if (page === 2) {
      setCurrent({
        currentImg: grouppic,
        currentTitle: 'W.E.B',
        currentDescription: 'A group project build by me and 2 other classmates',
        currentLink: 'https://62511829d01d855b08d59bc8--neon-rugelach-f51736.netlify.app/'
      })
    }
  }
  useEffect(

    () => {


      currentPage()


    }, [page]
  )
  return (
    <div className='works bg-pink-100 w-full h-[calc(100vh-64px)] snap-start flex justify-center' id="work">

      <div className="container w-4/5 bg-yellow-100 flex justify-center items-center">
        <div className='wrapper'>

          <Workcard image={current.currentImg} title={current.currentTitle} description={current.currentDescription} link={current.currentLink} />

          <div className=''>
            <h1>Page {page}</h1>
            <button onClick={() => { setPage(Math.max(1, page - 1)) }}>Previous</button>
            <button onClick={() => { setPage(Math.max(2, page - 1)) }}>Next</button>
          </div>
        </div>
      </div>


    </div>
  )
};
