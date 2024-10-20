import React from 'react'
import { Link } from 'react-router-dom'
import './registre.css'
const Registre = () => {
  return (
    <div className='login'>
      <div className='parent'>
        <h1>Login to your account</h1>
        <input type="email" placeholder='Your Email' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
        <p>Don't have an account? <a>Regeister</a></p>
      </div>
    </div>
  )
}

export default Registre