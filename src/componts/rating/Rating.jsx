import React from 'react'

const Rating = ({rating , reviews ,revio}) => {
  return (
    <div>
        
        {
            rating >=1?<i className='fa fa-star'></i>
            :rating >= 0.5 ?<i className='fa fa-star-half'></i>
            :<i className='far fa-star'></i>
        }
        {
            rating >=2?<i className='fa fa-star'></i>:rating >= 1.5 ?<i className='fa fa-star-half'></i>:<i className='far fa-star'></i>
        }
        {
            rating >=3?<i className='fa fa-star'></i>:rating >= 2.5 ?<i className='fa fa-star-half'></i>:<i className='far fa-star'></i>
        }
        {
            rating >=4?<i className='fa fa-star'></i>:rating >= 3.5 ?<i className='fa fa-star-half'></i>:<i className='far fa-star'></i>
        }
        {
            rating >=5?<i className='fa fa-star'></i>:rating >= 4.5 ?<i className='fa fa-star-half'></i>:<i className='far fa-star'></i>
        }
        <span style={{color:'blue',fontSize:"14px" , marginLeft:'5px'}}>
            {rating}
        </span>
        <span style={{color:'#444',fontSize:"14px" , marginLeft:'5px'}}>
            ({reviews}{ revio})
        </span>
    </div>
  )
}

export default Rating