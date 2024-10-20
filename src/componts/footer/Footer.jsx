import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className="socialMedia">
        <div className="titleSocil">
          <h3>Follow us on social media</h3>
        </div>
        <div className="iconSocial">
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-telegram'></i>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-youtube'></i>
          <i className='fa-brands fa-twitter'></i>
        </div>
      </div>
      <div className="botom">
        <div className='fotorBotom'>
          <h2 className='titel'>UseFull Links</h2>
          <ul>
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/athor">Authors</NavLink> </li>
            <li> <NavLink to="/about">About Us</NavLink></li>
            <li> <NavLink to="/contact">Contact Us</NavLink></li>
            <li> <NavLink to="/registre">Register</NavLink></li>
          </ul>
        </div>
        <div className='fotorBotom'>
          <h2 className='titel'>Contact Information</h2>
          <ul>
            <li> <i className='fa fa-phone'></i> Irag-Baghdad-Alrashid St</li>
            <li> <i className='fa fa-phone'></i> 123-456-789</li>
            <li> <i className='fa fa-phone'></i> info@gmail.com</li>
          </ul>
        </div>
        <div className='fotorBotom'>
          <h2 className='titel'>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique magnam quisquam
            alias assumenda soluta! Fuga voluptate dolores
            quam aut, eius sapiente odio deserunt repellat
            eos, quidem commodi recusandae labore laborum.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer