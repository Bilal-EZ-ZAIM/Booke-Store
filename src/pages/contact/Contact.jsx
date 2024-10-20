import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="one-contact">
        <div>
          <i className='fa fa-home'></i>
          <h1>Address</h1>
          <p>Morooco Casa </p>
        </div>
        <div>
          <i className='fa fa-phone'></i>
          <h1>Phone</h1>
          <p>123-456-789</p>
        </div>
        <div>
          <i className='fa fa-envelope'></i>
          <h1>Email</h1>
          <p>info@gmail.com</p>
        </div>

      </div>
      <div className="tow-contact">
        <div className='title'>
          <h2>Contact Us From</h2>
        </div>
        <div className='input'>
          <input type="text" placeholder='Name*' />
          <input type="text" placeholder='Subject*' />
          <input type="email" placeholder='Email*' />
        </div>
        
        <div className='textEaria'>
          <textarea placeholder='Your Message *'>

          </textarea>
        </div>
        <button className='btn'>Send</button>
      </div>
      <div className="contact-tree">

      </div>
    </div>
  )
}

export default Contact