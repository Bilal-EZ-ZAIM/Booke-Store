import React from 'react'
import './athors.css'
import { useState } from 'react'
const Athor = ({ authors }) => {
  const [serauthor, setauthors] = useState("");
  return (
    <div className='autor'>
      <div className="container">
        <div className="search-aoutor">
          <input onChange={(e)=>setauthors(e.target.value) } type="search" placeholder='Search in authors' />
        </div>
        <div className="cart-autors">
          {
            authors.filter(a=> a.name.toLowerCase().includes(serauthor)).map(item => {
              const {id , name , image} = item;
              return (
                <div key={id} className="carts">
                  <img src={require(`../../${image}`)} />
                  <h3>{name}</h3>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>

  )
}

export default Athor