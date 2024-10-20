import React from 'react'
import './button.css'

const Buttons = () => {
  return (
    <div className='buttons'>
        <div className="container">
            <div className='button-cart'> <i className='fa fa-truck'></i> <h4>Free Shipping</h4> </div>
            <div className='button-cart'> <i className='fa fa-gift'></i> <h4>Gift Card</h4> </div>
            <div className='button-cart'> <i className='fa fa-rotate-right'></i> <h4>7 Dayse Return</h4> </div>
            <div className='button-cart'> <i className='fa fa-paper-plane'></i> <h4>Contact Us</h4> </div>
        </div>
    </div>
  )
}

export default Buttons