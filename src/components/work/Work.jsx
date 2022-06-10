import React from 'react'
import tic from '../../assets/img/ticpic.png'
import psri from '../../assets/img/psri.png'
import grouppic from '../../assets/img/group-project.png'


export default function work(website, zValue) {
  const nextPage =()=> {
    console.log("123")
 }
  const lastPage =()=> {
    console.log("456")
 }
 const img1={position:"absolute", zIndex:"z-0"}
 const img2={position:"absolute", zIndex:"z-0"}
 const img3={position:"absolute", zIndex:"z-0"}
  return (
    // 这个页面的width问题？？
    <div className='works bg-pink-100 w-full h-[calc(100vh-64px)] snap-start flex justify-center overflow-hidden' id="work">
      <div className="container w-full h-screen bg-yellow-100 flex justify-center items-center">
        <i className="fa-solid fa-circle-arrow-left text-3xl text-slate-300 pr-10 pb-20 hover:text-slate-500 cursor-pointer" onClick={lastPage}></i>
        <a className="w-4/5 h-5/6" href={website}>
          <div className="slider w-full h-5/6 rounded-2xl overflow-hidden md:relative sm:flex">
            <img className={img1} src={tic} alt="tic-tac-toe" />
            <img className={img2} src={psri} alt="psri-img" />
            <img className={img3} src={grouppic} alt="WEB-website" />
          </div>
        </a>
        <i className="fa-solid fa-circle-arrow-right text-slate-300 text-3xl pl-10 pb-20 hover:text-slate-500 cursor-pointer " onClick={nextPage}></i>
      </div>
    </div>
  )
};
