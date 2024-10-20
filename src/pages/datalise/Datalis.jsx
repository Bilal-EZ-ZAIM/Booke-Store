import React from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../../componts/rating/Rating';
import { CartShopping } from '../../context/contectx';
import { useContext , useState } from 'react';
import './datlis.css'
const Datalis = ({ books }) => {
  const { addtoCart , cartItem } = useContext(CartShopping)
  const { userid } = useParams();
  const item = books.find(data => data.id === +userid)
  let sid = cartItem.find(item => item.id === +userid );
  const { image, title, author, price, rating, reviews, id, printLength, language, PublicationDate } = item;
  const [qty, setQty] = useState(sid?sid.quantity:1);
  

  return (
    <div className='datalis'>
      <div className="datalist-contenr">
        <div className="datalist-top">
          <div className="datalist-img">
            <img src={require(`../../books/${image}`)} />
          </div>
          <div className='datalist-ratigh'>
            <h1>{title}</h1>
            <div className="autor">
              <h3> by <span className='dataAoutor'> {author}</span> (Author)</h3>
            </div>
            <div className='childrn-rating'>
              <Rating className='rating' rating={rating} reviews={reviews} revio={' reviews'} />
            </div>
            <div className='addto-cart'>
              <input type='number'
                min='1'
                max='100'
                onChange={(e) => setQty(e.target.value)}
                value={qty}
              />
              <div className='carr-pl'>
                <button className='btn' onClick={(() => addtoCart({ ...item, quantity: qty }, qty))} ><i className='fa fa-cart-plus'></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="datalis-bottm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati tempora rem perspiciatis provident voluptas
            officiis veniam voluptates delectus iusto vitae, aut
            rerum assumenda quaerat? Veritatis adipisci illo animi
            quas, quos veniam earum porro voluptates ducimus,
            dignissimos saepe optio recusandae ab error dicta nostrum
            officiis, officia impedit accusantium eos illum. Facere
            delectus sequi ipsam excepturi nulla? Error tenetur veniam
            vero aliquid totam id beatae architecto saepe rem. Hic
            architecto quas provident veniam. Nihil repellat sapiente
            mollitia itaque asperiores odit omnis ipsam!
          </p>
          <div className="icon">
            <div className="final">
              <h3>Print Length</h3>
              <i className='fa fa-file-pdf'></i>
              <h3 className='h3'>{printLength} pages</h3>
            </div>
            <div className="final">
              <h3>Language</h3>
              <i className='fa fa-globe'></i>
              <h3 className='h3'>{language} </h3>
            </div>
            <div className="final">
              <h3> PublicationDate</h3>
              <i className='fa fa-calendar-days'></i>
              <h3 className='h3'>{PublicationDate} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datalis