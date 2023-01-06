import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './SingleProduct.css';
import spinner from '../../images/Spinner.svg';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SliderData from '../../components/main/SliderData';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from '@mui/material/Button';
import Slider from '../../components/main/Slider';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const API_URL = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PRODUCTS}`;

const SingleProduct = () => {

    const [productDetails, setProductDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [stockClass, setStockClass] = useState('green');

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const { id } = useParams();

    const getProductDetail = async () => {
        setIsLoading(true)
        try {
            let response = await axios.get(API_URL + "/" + id);
            setIsLoading(false)
            setProductDetails(response.data);
        } catch (err) {
            setError(err.message)
            console.log(error);
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getProductDetail();
        if (productDetails.stock < 10) {
            setStockClass('red');
        } else {
            setStockClass('green');
        }
    }, [productDetails.stock, id])


    return (
        !isLoading ?
            <div className='all-single-product'>
                <div className="single-product">
                    <div className="category-location">
                        <p className='category'>Category: <b>{productDetails.category}</b></p>
                        <p className='location'>metacart &gt; product &gt; {productDetails.title}</p>
                    </div>
                    <div className="all-details">
                        <div className="img">
                            <Slider
                                image={productDetails.images}
                            />
                        </div>
                        <div className="price-desc-btn">
                            <div className="product-desc">
                                <h1>{productDetails.title}</h1>
                                <div className='rating'>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={productDetails.rating} precision={0.5} readOnly />
                                    </Stack>
                                </div>
                                <h3>Brand: {productDetails.brand}</h3>
                                <p className='desc'><b>Description:</b> {productDetails.description}</p>
                                <p className="price red">
                                    <LocalOfferIcon />Deal of the Day
                                </p>
                                <div className="price">
                                    <p className='orgPrice'><CurrencyRupeeIcon /> {(productDetails.price * 50).toFixed(2)}/-</p>
                                    <p className='discounted'><CurrencyRupeeIcon /> {(Number(productDetails.price * 50)) + (Number(productDetails.discountPercentage * 50))}/-</p>
                                </div>
                                <p className='green'>You Save: <CurrencyRupeeIcon /> {(Number(productDetails.price * 50) + Number(productDetails.discountPercentage * 50)) - Number(productDetails.price * 50)}/-</p>
                                <p className={stockClass}>Item Left: {productDetails.stock}</p>
                            </div>
                            <div className="btn">
                                <Button variant="contained">
                                    Add to Cart
                                </Button>
                                <Button variant="contained">
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="related-product">
                    <SliderData
                        key={productDetails.id}
                        title={'Related Products'}
                        category={productDetails.category}
                    />
                </div>
            </div> :
            <div className='apiLoading'>
                <img src={spinner} alt="" />
                <p>Loading...</p>
            </div>
    )
}

export default SingleProduct;