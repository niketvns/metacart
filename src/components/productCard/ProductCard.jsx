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

    const { isCart, addToCart, checkObjInArray } = useGlobalCart();
    const { isWishlist, setIsWishlist, addToWishlist } = useGlobalWishlist();
    const { loginToken, notifySuccess, notifyWarn } = useGlobalLogin();

    const navigate = useNavigate();

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
                    <span onClick={() => addToWishlist(props.id)}>
                        <IconButton
                            aria-label="delete" id='wishlist-icon'
                        >
                            <FavoriteIcon
                                style={{ color: isWishlist.includes(props.id) ? "red" : "#b6bfb8" }}
                            />
                        </IconButton>
                    </span>
                </div>
                <div>
                    <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
                </div>
                <p className='desc'>{props.description}</p>

                <div className='btn'>
                    {
                        checkObjInArray(isCart, props.id) ?
                            <Button onClick={() => navigate('/cart')} variant="contained">
                                <ShoppingCartIcon /> Go To Cart
                            </Button> :
                            <Button onClick={() => addToCart(props.id)} variant="contained">
                                <ShoppingCartIcon /> Add To Cart
                            </Button>

                    }
                </div>
            </div>
        </>
    )
}
