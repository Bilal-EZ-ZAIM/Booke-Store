import React from 'react'
import { cartInfo } from '../../data/cart'
import { CartShopping } from '../../context/contectx'
import { useContext , useState } from 'react';
import './cart.css'
const Cart = () => {
    const {cartItem , addtoCart , remove} = useContext(CartShopping)
    let total = cartItem.reduce((itvalu, cur ) => itvalu + (+cur.price.toFixed(2)) * cur.quantity ,0).toFixed(2)
    return (
        <div className='cart'>
            <div className="contenr-cart">
                <div className="title-cart">
                    <h1>You Shopping Cart</h1>
                </div>
                <div className="main-content">
                    <div className="lefth">
                        {
                            cartItem.map(item => {
                                const { image, title, author, quantity, price } = item;
                                return (
                                    <div className="lin" key={item.id}>
                                        <div className="image">
                                            <img src={require(`../../books/${image}`)} />
                                            <div className="tileAtour">
                                                <div><b>Title : </b> <span>{title}</span></div>
                                                <div><b>Author : </b> <span>{author}</span></div>
                                            </div>
                                        </div>
                                        <div className="minceplus">
                                            <div className="btn">
                                                <button onClick={()=>addtoCart(item , (+quantity + 1) )}>+</button>
                                                <span>{quantity}</span>
                                                
                                                <button onClick={()=>addtoCart(item ,quantity>1?(quantity - 1):1 )}>-</button>
                                            </div>
                                            <div className="price">
                                                <h3>${(price * quantity).toFixed(2)}</h3>
                                            </div>
                                        </div>
                                        <div className='trash'>
                                        <i style={{fontSize:'22px'}} onClick={()=>remove(item.id)} className='fa fa-trash'></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="rigth">
                        <div>
                            <h1>ORDER SUMMARY</h1>
                        </div>
                        <div>
                            <h1>Subtotal</h1>
                            <h3>${total}</h3>
                        </div>
                        <div>
                            <h1>Shopping Cost</h1>
                            <h3>0</h3>
                        </div>
                        <div>
                           <h1> Discount</h1>
                           <h3>0</h3>
                        </div>
                        <div>
                            <h1>Total</h1>
                            <h3>${total}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

