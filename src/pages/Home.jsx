import React from 'react'
import Buttons from '../componts/buttons/Buttons'
import Slid from '../componts/sliderOne/Slid'
import SilderBook from '../componts/sliderOne/sliderbook/SilderBook'
import {books} from '../data/books'

const Home = () => {
    return (
        <div>
            <Slid />
            <Buttons />
            <SilderBook books={books} title={"Most giftd"} />
            <SilderBook books={books} title={"Best Seller"} />
            <SilderBook books={books} title={"Most wished for"} />
        </div>
    )
}

export default Home