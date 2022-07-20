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

      <div className="container w-4/5 bg-yellow-100 flex justify-center items-center gap-2">

        <button onClick={() => { setPage(Math.max(1, page - 1)) }} type="button" className=" rotate-180 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

        <div className='wrapper'>
          <div className='w-full flex justify-center'>
            <h3 className='mx-0 my-auto font-small leading-tight text-3xl mt-0 mb-2 text-blue-600'>Page {page}</h3>
          </div>
          <Workcard image={current.currentImg} title={current.currentTitle} description={current.currentDescription} link={current.currentLink} />


          <div className='w-full flex justify-around'>
            {/* <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => { setPage(Math.max(1, page - 1)) }}>Previous</button> */}
            {/* <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => { setPage(Math.max(2, page - 1)) }}>N e x t</button> */}
          </div>

        </div>

        <button onClick={() => { setPage(Math.max(2, page - 1)) }} type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

      </div>


    </div>
  )
};
