import React from 'react'
import book1 from '../../images/book1.png'
import book2 from '../../images/book2.png'
import book3 from '../../images/book3.png'
import { useState, useRef } from 'react'
import './slidr.css'
const Slid = () => {

    const [translet, settranslet] = useState(0);
    const handlClick = (x) => {

        if (x === 1) {
            settranslet(pre => pre + 1)
            if (translet === 2) {
                settranslet(2)
            }
        } else {
            settranslet(pre => pre - 1)
            if (translet === 0) {
                settranslet(0)
            }
        }

    }
    return (
        <div className='slider'>
            <div className='butons'>
                <i onClick={() => handlClick(1)} style={{ cursor: translet === 2 ? "no-drop" : "pointer" }} className='fa fa-arrow-left'></i>
                <i onClick={() => handlClick(2)} style={{ cursor: translet === 0 ? "no-drop" : "pointer" }} className='fa fa-arrow-right'></i>
            </div>
            <div className="parntcop"  style={{ transform: `translateX(${translet * (-100)}vw)` }}>
                <div className="parnt one">
                    <div className="parntimg">
                        <img src={book1} alt="" />
                    </div>
                    <div className="paragra">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading. it's living the adventure
                        </p>
                    </div>
                </div>
                <div className="parnt tow">
                    <div className="parntimg">
                        <img src={book2} alt="" />
                    </div>
                    <div className="paragra">
                        <h1 className="slide-info-title">The Books For Everyone</h1>
                        <p className="slide-info-desc">
                            You can read at the bookstore or at home
                        </p>
                    </div>
                </div>
                <div className="parnt tree">
                    <div className="parntimg">
                        <img src={book3} alt="" />
                    </div>
                    <div className="paragra">
                        <h1 className="slide-info-title">Check Out The New Titles</h1>
                        <p className="slide-info-desc">
                            We send you the book you want at home
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slid