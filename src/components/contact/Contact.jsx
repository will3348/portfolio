import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import contactPic from '../../contact2.png'

export default function Contact() {
  const [state, handleSubmit] = useForm("mrgjpdgg");
  if (state.succeeded) {
    return (
      <div className='contact bg-blue-300 w-full h-[calc(100vh-64px)] snap-start' id="contact">
        <p>Thanks for Contacting!</p>
      </div>);
  }
  return (
    <div className='contact bg-blue-300 w-full h-[calc(100vh-64px)] snap-start flex items-center xl:text-3xl md:text-2xl sm:text-xl xs:text-lg' id="contact">
      <div className="left w-1/2 flex justify-center items-center">
        <img src={contactPic} alt="pic" />
      </div>
      <div className="formSection w-1/2 flex justify-center">
        <form className="form w-3/5 flex flex-col xl:gap-y-5 lg:gap-y-4 md:gap-y-3 sm:gap-y-2" onSubmit={handleSubmit}>
          <div className="firstName">
            <label htmlFor="firstName">
              First Name:
            </label><br/>
            <input className="w-full rounded-lg"
              id="firstName"
              type="firstName"
              name="firstName"
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">
              Last Name:
            </label><br/>
            <input className="w-full rounded-lg"
              id="lastName"
              type="lastName"
              name="lastName"
            />
          </div>
          <div className="email">
            <label htmlFor="email">
              Email Address:
            </label><br/>
            <input className="w-full rounded-lg"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="message">
          <label htmlFor="message">
              Message:
            </label><br/>
            <textarea className="w-full md:h-60 rounded-lg md:h-40 xs:h-30"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="button bg-blue-100 rounded-2xl border-solid border-slate-400 hover:bg-gray-400" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}
