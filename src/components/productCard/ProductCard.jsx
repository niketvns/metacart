import React, { useState } from 'react';
import './ProductCard.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalCart } from '../../context/cart-context';
import { useGlobalLogin } from '../../context/login-context';
import { useGlobalWishlist } from '../../context/wishlist-context';

export default function ProductCard(props) {

    const [addedToCart, setAddedToCart] = useState(false);
    const [addedWishlist, setAddedWishlist] = useState(false);

    const { isCart, setIsCart, IncrementQnt } = useGlobalCart();
    const { isWishlist, setIsWishlist } = useGlobalWishlist();
    const { loginToken, notifySuccess, notifyWarn } = useGlobalLogin();

    const navigate = useNavigate();

    const changeCartItems = () => {
        if (!addedToCart) {
            if (loginToken) {
                let itemFlag = 0;
                isCart.map((curObj) => {
                    if (curObj.id === props.id) {
                        itemFlag = 1;
                        IncrementQnt(props.id)
                    }
                })
                if (itemFlag === 0) {
                    setIsCart([
                        {
                            id: props.id,
                            qnt: 1
                        },
                        ...isCart
                    ])
                }


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

    const changeWishlist = () => {
        if (!addedWishlist) {
            if (loginToken) {
                setIsWishlist([props.id, ...isWishlist])
                notifySuccess('Item Added to Wishlist')
                setAddedWishlist(true)
            } else {
                navigate('/login')
                notifyWarn('Login to Add Wishlist')
            }
        } else {
            navigate('/wishlist')
        }
    }

    return (
        <>
            <div className='ind-product'>
                <NavLink to={`/product/${props.id}`}>
                    <div className="img">
                        <img src={props.image} alt="image" />
                    </div>
                </NavLink>
                <h3>{props.title}</h3>
                <div className="price-wishlist">
                    <p className='price'><sup>&#8377;</sup>{(props.price * 40).toFixed(0)}/-</p>
                    <span onClick={changeWishlist}>
                        <IconButton
                            aria-label="delete" id='wishlist-icon'
                        >
                            <FavoriteIcon
                                style={{ color: '#1565c0' }}
                            />
                        </IconButton>
                    </span>
                </div>
                <div>
                    <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
                </div>
                <p className='desc'>{props.description}</p>

                <div className='btn'>
                    <Button onClick={changeCartItems} variant="contained">
                        <ShoppingCartIcon />{addedToCart ? 'Go To Cart' : 'Add To Cart'}
                    </Button>
                </div>
            </div>
        </>
    )
}
