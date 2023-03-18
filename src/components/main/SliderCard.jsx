import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalLogin } from '../../context/login-context';
import { useGlobalWishlist } from '../../context/wishlist-context';

const SliderCard = ({ val }) => {


    const [heartColor, setHeartColor] = useState('#b6bfb8');

    const { isWishlist, addToWishlist } = useGlobalWishlist();

    return (
        <>
            <div
                className="deal-item-container"
            >
                <NavLink to={`/product/${val.id}`}>
                    <div className="deal-item">
                        <div className="product-img">
                            <img src={val.images[0]} alt="" />
                        </div>
                        <div className="product-details">
                            <h3>{val.title}</h3>
                            <p className='price'>&#8377;{val.price * 50}/-</p>
                            <p>{val.brand}</p>
                        </div>
                    </div>
                </NavLink>
                {
                    <div className="add-to-cart" onClick={() => addToWishlist(val.id)}>
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                            onClick={() => setHeartColor("red")}
                        >
                            <FavoriteIcon
                                style={{ color: isWishlist.includes(val.id) ? "red" : heartColor }}
                            />
                        </IconButton>
                    </div>
                }
            </div>
        </>
    )
}

export default SliderCard