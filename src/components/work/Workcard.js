import React from 'react'

export default function cards(props) {
  return (
    <div className="max-w-lg bg-white rounded-xl  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href={props.link} target="_blank" rel="noreferrer noopener">
    <img src={props.image} alt="" />
    </a>
    <div className="md:p-5 xs:p-2">
      <a href={props.link}>
        <h5 className=" font-bold tracking-tight text-gray-900 dark:text-white xl:mb-2 text-2xl md:text-lg hidden xs:hidden mb-0 text-sm">{props.title}</h5>
      </a>
      <p className=" md:inline-block mb-3 font-normal text-gray-700 dark:text-gray-400  xs:hidden mb-0">{props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer noopener" className="items-center py-2 px-3 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:text-lg md:inline-flex text-md font-medium  xs:hidden text-xs ">
        Read more
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  </div>
  )
}