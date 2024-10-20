import React, { useState } from 'react'
import { CartShopping } from './contectx'

const Shoping = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    // add to cart 
    const addtoCart = (item, qty) => {
        let kayn = cartItem.find(items => {
            return items.id === item.id
        })
        if (kayn) {
            cartItem.map((book,index) => {
                if (book.id === item.id) {
                    let x = [...cartItem , cartItem[index] = {...book , quantity : qty}]
                    setCartItem([...cartItem])
                    return
                }
            })
        } else {
            setCartItem(
                pre => [...pre, item]
            )
        }
    }
    
    // remove  
    const remove = (id)=>{
        setCartItem(pre => pre.filter(item =>  item.id !== id))
    }
    return (
        <CartShopping.Provider value={{
            cartItem,
            addtoCart,
            remove
        }}>
            {children}
        </CartShopping.Provider>
    )
}
export default Shoping


/* setCartItem(
                pre => [{...item , quantity : qty}]
            ) 
*/