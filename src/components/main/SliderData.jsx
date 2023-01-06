import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import loader from '../../images/Bars.svg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const SliderData = (props) => {

    const [noOfItems, setNoOfItems] = useState(5)
    const [dealOfTheDay, setDealOfTheDay] = useState();

    const API_URL = `https://dummyjson.com/products/category/${props.category}?limit=10`;

    const getFunction = async () => {
        try {
            let response = await axios.get(API_URL)
            setDealOfTheDay(response.data.products);
        } catch (error) {
            console.log("This is error message: " + error.message)
        }
    }


    useEffect(() => {
        getFunction()
        let deviceWidth = window.innerWidth;
        if (deviceWidth < 1300 && deviceWidth > 1000) {
            setNoOfItems(5);
        } else if (deviceWidth < 1000 && deviceWidth > 860) {
            setNoOfItems(4)
        } else if (deviceWidth < 860) {
            setNoOfItems(3)
        }
    }, [])

    return (
        <>
            <div className="best-deal">
                <div className="title-deal">
                    <h2>{props.title}</h2>
                    <NavLink to='/all-products'>{props.all}</NavLink>
                </div>
                {
                    dealOfTheDay ?
                        <div className="deal-items">
                            <Swiper
                                slidesPerView={noOfItems}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    dealOfTheDay.map((val) => {
                                        return (
                                            <>
                                                <SwiperSlide key={val.id}>
                                                    <NavLink to={`/product/${val.id}`}>
                                                        <div className="deal-item">
                                                            <div className="product-img">
                                                                <img src={val.images[0]} alt="" />
                                                            </div>
                                                            <div className="product-details">
                                                                <h3>{val.title}</h3>
                                                                <p className='price'>{val.price * 50} Rs. /-</p>
                                                                <p>{val.brand}</p>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                }
                            </Swiper>
                        </div> :
                        <div className="best-deal-loader">
                            <img src={loader} alt="img" />
                        </div>
                }
            </div>

        </>
    )
}

export default SliderData;