import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm("mrgjpdgg");
  if (state.succeeded) {
    return (
      <div className='contact bg-blue-300 w-full h-[calc(100vh-64px)] snap-start' id="contact">
        <p>Thanks for Contacting!</p>
      </div>);
  }
  return (
    <div className='contact bg-blue-300 w-full h-[calc(100vh-64px)] snap-start' id="contact">
      <div className="form w-2/5 flex justify-center bg-yellow-100">
        <form onSubmit={handleSubmit}>
          <div className="firstName">
            <label htmlFor="firstName">
              First Name:
            </label>
            <input
              id="firstName"
              type="firstName"
              name="firstName"
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">
              Last Name:
            </label>
            <input
              id="lastName"
              type="lastName"
              name="lastName"
            />
          </div>
          <div className="email">
            <label htmlFor="email">
              Email Address:
            </label>
            <input
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
            </label>
            <textarea
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}
