import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom';

const SliderCard = ({ val }) => {


    const [showDealBtn, setShowDealBtn] = useState(false);

    return (
        <>
            <div
                className="deal-item-container"
                onMouseOver={() => setShowDealBtn(true)}
                onMouseLeave={() => setShowDealBtn(false)}
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
                    showDealBtn
                    &&
                    <div className="add-to-cart">
                        {/* <IconButton color="primary" aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton> */}
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <FavoriteBorderIcon />
                        </IconButton>
                    </div>
                }
            </div>
        </>
    )
}

export default SliderCard