import React from 'react'

export default function footer() {
  return (
    <div className='footer bg-red-200 fixed bottom-0 w-full flex justify-center gap-20'>
      <span> &copy; Will Tengyuan Li 2022</span>
      <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-phone"></i>403-383-9333</span>
      <span className="2 lg:inline-block xs:hidden"><i class="fa-solid fa-envelope"></i>will19940430@gmail.com</span>
      <span className="3 lg:inline-block xs:hidden"><i class="fa-brands fa-github"></i>will3348</span>
    
    </div>
  )
}
