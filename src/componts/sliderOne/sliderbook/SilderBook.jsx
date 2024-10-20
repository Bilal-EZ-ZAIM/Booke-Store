import React from 'react'
import book from '../../../books/hopeless.jpg'
import { useRef, useState } from 'react'
import './sliderBook.css'
import Rating from '../../rating/Rating'
import PopUp from '../../popUp/PopUp'
import { CartShopping } from '../../../context/contectx'
import { useContext} from 'react';
const SilderBook = ({ books, title }) => {
    const [qty, setqty] = useState(1);
    const { addtoCart } = useContext(CartShopping)
    const names = useRef(null);
    const torit = useRef();
    const [popUp, setpopUp] = useState(false);
    const [Id, setId] = useState();

    const [ValueTra, setValueTra] = useState(0);
    const translit = (itijah) => {
        const scr = names.current.scrollWidth;
        const ofs = names.current.offsetWidth;
        const som = (scr - ofs);
        if (itijah === 'rigth') {
            setValueTra(pre => pre + 270)
            if (ValueTra >= 0) {
                setValueTra(0)
            }
        } else {
            setValueTra(pre => pre - 270)
            if (ValueTra <= (-som)) {
                setValueTra(-som)
            }
        }
    }
    const popup = (id) => {
        setpopUp(pre => !pre)
        setId(id)
    }
    return (
        <>
        {
                    popUp ? <PopUp setpopUp={setpopUp} setId={Id}  /> : null
                }
            <div className='slider-book' >
                
                <div className="silider-book-title">
                    <h2>{title}</h2>
                </div>
                <i onClick={() => translit('r')} className='fa fa-arrow-left left icon'></i>
                <div className="silder-book-parnt" ref={names} style={{ transform: `translateX(${ValueTra}px)` }}>
                    {
                        books.map(item => {
                            const { id, image, title, price, reviews, rating } = item
                            return (
                                <div className="silder-book-children" key={id}>
                                    <div className='childrn-image'>
                                        <img src={require(`../../../books/${image}`)} />
                                    </div>
                                    <div className='childrn-title'>
                                        <h4>{title}</h4>
                                    </div>
                                    <div className='childrn-rating'>
                                        <Rating rating={rating} reviews={reviews} />
                                    </div>
                                    <div className='childrn-price'>
                                        <h4>${price}</h4>
                                    </div>
                                    <div className='childrn-cartShopping'>
                                        <i onClick={()=> popup(id)} className='fa fa-eye'></i>
                                        <i onClick={()=> addtoCart({...item , quantity : 1 } , qty) } className='fa fa-cart-plus'></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <i onClick={() => translit('rigth')} className='fa fa-arrow-right right icon'></i>

            </div>
            
        </>
    )
}

export default SilderBook