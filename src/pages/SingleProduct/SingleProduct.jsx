import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './SingleProduct.css';
import spinner from '../../images/Spinner.svg';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SliderData from '../../components/main/SliderData';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useGlobalCart } from '../../context/cart-context';
import { useGlobalLogin } from '../../context/login-context';
import discountImg from '../../images/discount.png'
import freeDelivery from '../../images/free-delivery-icon.png'
import shield from '../../images/shield.png';
import returnImg from '../../images/return.png';

const API_URL = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PRODUCTS}`;

const SingleProduct1 = () => {

    const [productDetails, setProductDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [stockClass, setStockClass] = useState('green');
    const [addedToCart, setAddedToCart] = useState(false);
    const [fullImg, setFullImg] = useState()

    const { isCart, setIsCart } = useGlobalCart();
    const { loginToken, notifySuccess, notifyWarn } = useGlobalLogin();

    const navigate = useNavigate();


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
            setFullImg(productDetails.thumbnail)
        } catch (err) {
            setError(err.message)
            console.log(error);
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getProductDetail();
        if (productDetails.stock <= 0) {
            setStockClass('red');
        } else {
            setStockClass('green');
        }
    }, [productDetails.stock, id])

    const changeCartItems = () => {
        if (!addedToCart) {
            if (loginToken) {
                setIsCart([
                    {
                        id: id,
                        qnt: 1
                    },
                    ...isCart
                ])

                notifySuccess('Item Added to Cart')
                setAddedToCart(true)
            } else {
                navigate('/login')
                notifyWarn('Login to Add Item')
            }
        } else {
            navigate('/cart')
        }
    }


    return (
        !isLoading ?
            <div className='all-single-product'>
                <div className="single-product">
                    <div className="category-location">
                        <p className='category'>Category: <b>{productDetails.category}</b></p>
                        <p className='location'>metacart &gt; product &gt; {productDetails.title}</p>
                    </div>
                    <div className="all-details">
                        <div className="image-section">
                            <div className="image-selector">
                                {
                                    productDetails.images.map((img) => {
                                        return (
                                            <div
                                                className="small-img"
                                                onMouseOver={() => setFullImg(img)}
                                            >
                                                <img src={img} alt="img" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="full-image">
                                {
                                    fullImg
                                    &&
                                    <img src={fullImg} alt="image" />
                                }
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="product-desc">
                                <h1>{productDetails.title}</h1>
                                <div className='rating'>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={productDetails.rating} precision={0.5} readOnly />
                                    </Stack>
                                </div>
                                <div>Brand: <b>{productDetails.brand}</b></div>
                                <p className='desc'><b>Description:</b> {productDetails.description}</p>
                                <p className="deal red">
                                    <LocalOfferIcon />Deal of the Day
                                </p>
                                <div className="price">
                                    <div className="buyPrice">
                                        <p className='discountedPercent'>-{productDetails.discountPercentage.toFixed(2)}%</p>
                                        <p className='orgPrice'>&#8377;{(productDetails.price * 50).toFixed(2)}/-</p>
                                    </div>
                                    <div className="mrp">
                                        MRP: <span className='discounted'>&#8377;{(Number(productDetails.price * 50)) + (Number(productDetails.discountPercentage * 50))}/-</span>
                                    </div>
                                </div>
                                <p className='green'>You Save: &#8377;{(Number(productDetails.price * 50) + Number(productDetails.discountPercentage * 50)) - Number(productDetails.price * 50)}/-</p>
                                <p className={stockClass}>{productDetails.stock ? "In Stock" : "Out Of Stock"}</p>
                                <div className="offers">
                                    <h3><img src={discountImg} alt="img" /> Offers</h3>
                                    <p><LocalOfferIcon className='offer-icon' /> <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card <a href="">T&C</a></p>
                                    <p><LocalOfferIcon className='offer-icon' /> Buy this Product and Get Extra ₹500 Off on Two-Wheelers <a href="">T&C</a></p>
                                    <p><LocalOfferIcon className='offer-icon' /> <b>Partner Offer</b> Purchase now & get a surprise cashback coupon for January / February 2023 <a href="">Know More</a></p>
                                    <p><LocalOfferIcon className='offer-icon' /> <b>Partner Offer</b> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000* <a href="">Know More</a></p>
                                </div>
                                <div className="check-location">
                                    <p>Delivery </p>
                                    <div className="input-btn">
                                        <TextField id="standard-basic" label="Pin Code" type={"number"} maxlength={'6'} variant="standard" />
                                        <Button variant="text">check</Button>
                                    </div>
                                </div>
                                <div className="delivery-contract">
                                    <div className="delivery-contract-item fast-delivery">
                                        <img src={freeDelivery} alt="" />
                                        <p>Free Delivery</p>
                                    </div>
                                    <div className="delivery-contract-item return">
                                        <img src={returnImg} alt="" />
                                        <p>7 Days Return</p>
                                    </div>
                                    <div className="delivery-contract-item secure">
                                        <img src={shield} alt="" />
                                        <p>Secure</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                <Button variant="contained" onClick={changeCartItems}>
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
                        title={'Products related to this item'}
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

export default SingleProduct1;