import React from 'react';
import { books } from '../../data/books';
import Rating from '../rating/Rating';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartShopping } from '../../context/contectx';
import { useContext , useState } from 'react';
import './pop.css';
const PopUp = ({ setpopUp, setId }) => {
    const { addtoCart , cartItem} = useContext(CartShopping)
    const closPop = () => {
        setpopUp(pre => !pre)
    }
    
    let iditem = books.find(item => item.id === setId);
    let sid = cartItem.find(item => item.id === setId );
    const [qty, setQty] = useState(sid?sid.quantity:1)
    const { image, title, author, price, rating, reviews, id, inStock } = iditem;
    //let quati = sid.quantity===undefined?1:sid.quantity;
    
    return (
        <div className='popup' onClick={() => setpopUp(false)}>
            <div className="parntpopuo">
                <i onClick={closPop} className='fa fa-x clos'></i>
                <div className="children-pop" onClick={(e) => e.stopPropagation()}>
                    <div className="imgage">
                        <img src={require(`../../books/${image}`)} />
                    </div>
                    <div className="toRigth">
                        <h1 className='title-toRigth'>{title}</h1>
                        <div className="stutus">
                            <h3>Status : </h3>
                            {
                                inStock ? <span>in stock</span> : <span>No stock</span>
                            }

                        </div>
                        <div className='childrn-rating'>
                            <Rating rating={rating} reviews={reviews} />
                        </div>
                        <div className="stutus">
                            <h3>Autour : </h3>
                            <span className='autor'>{author}</span>
                        </div>
                        <div className="stutus">
                            <h3>Price : </h3>
                            <span className='pric'>${price}</span>
                        </div>
                        <div className='addto-cart'>
                            <input type='number'
                                min='1'
                                max='100'
                                onChange={(e)=> setQty(e.target.value)}
                                
                                value={qty}
                                
                            />
                            <div className='carr-pl'>
                                <button className='btn' onClick={() => addtoCart({...iditem , quantity : qty} , qty)} ><i className='fa fa-cart-plus'></i>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                        <Link to={`/datalise/${id}`} className='popbtn'>See More Details</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopUp