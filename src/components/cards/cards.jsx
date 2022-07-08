import React from 'react'
import Cardtemplate from './Cardtemplate'
import react from '../../assets/img/react.png'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import js from '../../assets/img/js_image.png'

export default function cards() {
  return (
    <div className='cards bg-yellow-300 w-full h-[calc(100vh-64px)] snap-start flex justify-center' id='cards'>
      <div className="cardSection w-4/5 lg:flex justify-between items-center xs:grid grid-cols-2 ">
        <Cardtemplate image={html} title='HTML' description='Good Understanding in HTML5.'/>
        <Cardtemplate image={css} title='CSS' description='Tailwind CSS Frenetic Fan.'/>
        <Cardtemplate image={js} title='JavaScript' description='JavaScript (ES5, ES6)'/>
        <Cardtemplate image={react} title='Frameworks' description='Experience with React Vue Project Development'/>
      </div>
    </div>
  )
}
