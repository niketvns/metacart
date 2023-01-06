import React, { useState, useEffect } from 'react';
import './main.css';
import Slider from './Slider';
import SliderData from './SliderData';
import Collection from './Collection';
import BestOffers from './BestOffers';
import header1 from '../../images/slider-img.png';
import header2 from '../../images/ecommerce.jpg';
import header3 from '../../images/ecommerce.png';
import header4 from '../../images/slider-img2.jpg';

export default function Main() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])


    return (
        <>
            <header>
                <Slider
                    image={[header1, header2, header3, header4]} />
                <SliderData
                    key={921}
                    title={'Home Decoration'}
                    category={'home-decoration'}
                    all={'view all'}
                />
                <Collection />
                <BestOffers />
                <SliderData
                    key={922}
                    title={'Sunglasses'}
                    category={'sunglasses'}
                    all={'view all'}
                />
                <SliderData
                    key={923}
                    title={'Groceries'}
                    category={'groceries'}
                    all={'view all'}
                />
                <SliderData
                    key={924}
                    title={'Womens Jewellery'}
                    category={'womens-jewellery'}
                    all={'view all'}
                />
                <SliderData
                    key={925}
                    title={'Mens Shoes'}
                    category={'mens-shoes'}
                    all={'view all'}
                />
                <SliderData
                    key={926}
                    title={'Laptops'}
                    category={'laptops'}
                    all={'view all'}
                />
            </header>
        </>
    )
}

