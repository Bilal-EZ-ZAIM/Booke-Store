import React from 'react'
import './header.css';
import { NavLink } from 'react-router-dom';
import { CartShopping } from '../../context/contectx';
import { useState, useContext } from 'react';
const Header = () => {
    const {cartItem} = useContext(CartShopping);
    const [toogel, settoogel] = useState(false);
    const [tt , sett] = useState(0)
    const toglClass = ()=>{
        settoogel(!toogel)
    }
    return (
        <header className='header'>
            <div className="header-one">
                <div className="container">
                    <h3><i onClick={toglClass} className={toogel?'fa fa-x ':'fa fa-bars'}>  </i></h3>
                    <h3><i className='fa fa-phone'></i>123-456-789</h3>
                    <h3>Welcom To Online Book Store</h3>
                    <h3><i className='fa fa-user'></i> Login</h3>
                </div>
            </div>
            <div className="container">
                <div className="respons">
                    <h3 className='none'>Book <i className='fa fa-book-open'></i> Store</h3>
                    <div className="search">
                        <input type="text" placeholder='Search in book store...' />
                        <i className='fa fa-search'></i>
                    </div>
                    <NavLink style={{color:"#fff" , position:'relative'} } to='/cart'>
                        {
                            cartItem.length>0 && <h3 className='lengthd'>{cartItem.length}</h3>
                        } 
                    
                    <i className='fa fa-cart-shopping'></i>
                    </NavLink>
                    
                </div>
                <div className={`nav  ${toogel?'newclass':null}`} style={{left: toogel?"0":`0`}}>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li> <NavLink to="/athor">Authors</NavLink> </li>
                        <li> <NavLink to="/about">About Us</NavLink></li>
                        <li> <NavLink to="/contact">Contact Us</NavLink></li>
                        <li> <NavLink to="/registre">Register</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
